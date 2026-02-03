const options = { active: true, currentWindow: true };

export async function getUrl() {
  let tabs = await chrome.tabs.query(options);
  return tabs[0]?.url;
}

// For a link like https://archiveofourown.org/works/78470346/chapters/205719781
// it extracts id after /works/
export async function getFanficId(fanficUrl?: string) {
  let url = fanficUrl ?? (await getUrl());
  if (!url) return;
  let parts = splitUrlPathname(url);
  return parts[2];
}

export function splitUrlPathname(fanficUrl: string) {
  let url = new URL(fanficUrl);
  let parts = url.pathname.split("/");
  return parts;
}

export function getChapterId(fanficUrl: string) {
  let parts = splitUrlPathname(fanficUrl);
  return parts[4];
}

export async function getFanficData(url?: string): Promise<fanfic | null> {
  let id = await getFanficId(url);
  if (!id) return null;
  let fanficData = await chrome.storage.local.get(id);
  if (!fanficData) return null;
  return fanficData[id] as fanfic;
}

export async function saveFanfic(fanfic: fanfic) {
  let id = fanfic.id;
  await chrome.storage.local.set({
    [id]: fanfic,
  });
}

export async function updateFanfic(url: string, updated: any) {
  let id = await getFanficId(url);
  if (!id) return null;
  let fanficData: any = await chrome.storage.local.get(id);
  if (fanficData) {
    await chrome.storage.local.set({
      [id]: { ...fanficData[id], ...updated },
    });
  }
}

export async function getLastReadFanfics() {
  let lastRead = await chrome.storage.local.get("lastRead");
  return lastRead["lastRead"] as string[];
}

export async function addFanficToLastRead(fanfic: fanfic) {
  let lastRead = (await getLastReadFanfics()) ?? [];
  if (isFanficInLastRead(lastRead, fanfic)) return null;

  if (lastRead.length === 5) {
    lastRead.shift();
  }
  lastRead.push(fanfic.id);
  await chrome.storage.local.set({ lastRead });
}

function isFanficInLastRead(lastRead: any[], fanfic: fanfic) {
  return lastRead.some((recentFanficId) => recentFanficId === fanfic.id);
}

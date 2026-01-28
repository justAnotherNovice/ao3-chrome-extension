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
  let urlParts = url.split("/");
  return urlParts[4];
}

export async function getFanficData(url?: string): Promise<fanfic | null> {
  let id = await getFanficId(url);
  if (!id) return null;
  let fanficData = await chrome.storage.local.get(id);
  if (!fanficData) return null;
  return fanficData[id] as fanfic;
}

export async function saveFanfic(fanfic: fanfic) {
  let id = await getFanficId();
  if (!id) return;
  await chrome.storage.local.set({
    [id]: { ...fanfic },
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

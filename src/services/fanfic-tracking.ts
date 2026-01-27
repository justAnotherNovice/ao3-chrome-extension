const options = { active: true, currentWindow: true };

export async function getUrl() {
  let tabs = await chrome.tabs.query(options);
  return tabs[0]?.url;
}

export async function getFanficId() {
  let url = await getUrl();
  if (!url) return;
  let urlParts = url.split("/");
  return urlParts[4];
}

export async function getFanficData() {
  let id = await getFanficId();
  if (!id) return;
  let fanficData = await chrome.storage.local.get(id);
  return fanficData[id];
}

export async function saveFanfic(fanfic: any) {
  let id = await getFanficId();
  if (!id) return;
  await chrome.storage.local.set({
    [id]: { ...fanfic },
  });
}

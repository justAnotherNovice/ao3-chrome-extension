export async function sendMessage(action: string, options?: any) {
  const query = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(query);
  if (tabs[0].id) {
    chrome.tabs.sendMessage(tabs[0].id, { action, options });
  }
}

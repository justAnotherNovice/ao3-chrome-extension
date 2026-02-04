import { updateFanfic } from "../services/fanfic-tracking";

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "UPDATE_CHAPTER") {
    let tabId = sender?.tab?.id;
    let message = { action: "UPDATE_CHAPTER" };
    setTimeout(() => {
      if (tabId) chrome.tabs.sendMessage(tabId, message);
    }, 3000);
  }
});

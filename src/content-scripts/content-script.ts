import { getFanficTitle, getFanficData } from "./get-fanfic-data";

chrome.runtime.onMessage.addListener((message: any) => {
  if (message.action === "GET_TITLE") {
    let title = getFanficTitle();
    console.log("content script: ", title);
    chrome.runtime.sendMessage({ action: "GET_TITLE", title });
  }
  if (message.action === "GET_FANFIC") {
    let fanfic = getFanficData(message.options.status);
    chrome.runtime.sendMessage({ action: "GET_FANFIC", fanfic });
  }
});

import {
  getFanficTitle,
  getFanficData,
  getFanficContent,
} from "./get-fanfic-data";
import { checkBookmark, saveBookmark } from "./fanfic-bookmark";

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
  if (message.action === "SAVE_BOOKMARK") {
    let fanficParagraphs = getFanficContent();
    fanficParagraphs?.addEventListener("click", onSaveBookmark);
  }
});

async function onSaveBookmark(event: Event) {
  if (event.target instanceof HTMLElement) {
    let fanficParagraphs = getFanficContent();
    await saveBookmark(event.target);
    fanficParagraphs?.removeEventListener("click", onSaveBookmark);
  }
}

checkBookmark();

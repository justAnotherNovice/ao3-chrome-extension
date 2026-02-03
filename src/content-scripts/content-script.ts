import {
  getFanficHeader,
  getFanficData,
  getFanficContent,
} from "./get-fanfic-data";
import { checkBookmark, saveBookmark } from "./fanfic-bookmark";
import { showBookmarkTip, showTipOnMouseOver } from "./fanfic-bookmark";

chrome.runtime.onMessage.addListener(async (message: any) => {
  if (message.action === "GET_TITLE") {
    chrome.runtime.sendMessage({ action: "GET_TITLE", ...getFanficHeader() });
  }
  if (message.action === "GET_FANFIC") {
    let fanfic = await getFanficData(message.options.status);
    chrome.runtime.sendMessage({ action: "GET_FANFIC", fanfic });
  }
  if (message.action === "SAVE_BOOKMARK") {
    let fanficParagraphs = getFanficContent();
    showBookmarkTip();
    fanficParagraphs?.addEventListener("click", onSaveBookmark);
    showTipOnMouseOver(fanficParagraphs as Element);
  }
});

function createExtensionDiv() {
  const host = document.createElement("div");
  host.id = "ao3-extension-root";
  document.body.appendChild(host);
}

async function onSaveBookmark(event: Event) {
  if (event.target instanceof HTMLElement) {
    let fanficParagraphs = getFanficContent();
    await saveBookmark(event.target);
    fanficParagraphs?.removeEventListener("click", onSaveBookmark);
  }
}

createExtensionDiv();
checkBookmark();

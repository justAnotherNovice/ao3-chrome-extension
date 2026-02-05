import {
  getFanficHeader,
  collectFanficData,
  getFanficContent,
  updateChapter,
} from "./get-fanfic-data";
import { checkBookmark, saveBookmark } from "./fanfic-bookmark";
import { showBookmarkTip, showTipOnMouseOver } from "./fanfic-bookmark";
import { setUserActionsListeners } from "./user-actions";

chrome.runtime.onMessage.addListener(async (message: any) => {
  if (message.action === "GET_TITLE") {
    chrome.runtime.sendMessage({ action: "GET_TITLE", ...getFanficHeader() });
  }
  if (message.action === "GET_FANFIC") {
    let fanfic = await collectFanficData(message.options.status);
    chrome.runtime.sendMessage({ action: "GET_FANFIC", fanfic });
    setUserActionsListeners();
  }
  if (message.action === "SAVE_BOOKMARK") {
    let fanficParagraphs = getFanficContent();
    showBookmarkTip();
    fanficParagraphs?.addEventListener("click", onSaveBookmark);
    showTipOnMouseOver(fanficParagraphs as Element);
  }
});

// reacts only to the storage changes caused by a <Next chapter> click on a fanfic page to update chapter title
chrome.storage.onChanged.addListener((changes, area) => {
  let isNextChapter = changes?.update?.newValue;
  if (isNextChapter) {
    setTimeout(async () => {
      await updateChapter();
      setUserActionsListeners();
      await chrome.storage.local.remove("update");
    }, 2000);
  }
});

function createExtensionDiv() {
  const host = document.createElement("div");
  host.id = "ao3-extension-root";
  document.body.appendChild(host);
}

async function onSaveBookmark(this: HTMLElement, event: Event) {
  if (event.target instanceof HTMLDivElement) return null;
  if (event.target instanceof HTMLElement) {
    await saveBookmark(event.target);
    this?.removeEventListener("click", onSaveBookmark);
  }
}

createExtensionDiv();
setUserActionsListeners();
checkBookmark();

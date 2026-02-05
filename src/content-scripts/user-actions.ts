import { updateFanfic } from "../services/fanfic-tracking";
import { getChapterInfo } from "./get-fanfic-data";
import { updateChapter } from "./get-fanfic-data";

export function setUserActionsListeners() {
  let feedback = document.querySelector("#feedback");
  let actions = feedback?.querySelector("ul")?.children;
  let downloadOptions = document.querySelector(".download")?.lastElementChild;
  let { chapterNumber } = getChapterInfo();
  if (!actions || !downloadOptions) return null;

  async function listenNextChapterButton() {
    chrome.storage.local.set({ update: true });
    //chrome.runtime.sendMessage({ action: "UPDATE_CHAPTER" });
  }

  async function listenKudosButton() {
    await updateFanfic(window.location.href, { isKudosed: true });
  }

  async function listenDownloadedButton() {
    await updateFanfic(window.location.href, { isDownloaded: true });
  }

  function setListeners([index1, index2]: number[]) {
    if (!actions || !downloadOptions) return null;
    (actions[index1] as HTMLElement).onclick = listenNextChapterButton;
    (actions[index2] as HTMLElement).onclick = listenKudosButton;
  }

  if (chapterNumber) {
    // starting from chapter #2, <Next chapter> and <Kudos> buttons have different positions in the list
    if (chapterNumber > 1) {
      setListeners([2, 3]);
      (actions[1] as HTMLElement).onclick = null;
    } else {
      setListeners([1, 2]);
      (actions[3] as HTMLElement).onclick = null;
    }
  } else {
    (actions[1] as HTMLElement).onclick = listenKudosButton;
  }
  (downloadOptions as HTMLElement).onclick = listenDownloadedButton;
}

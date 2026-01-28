import { getFanficData, updateFanfic } from "../services/fanfic-tracking";
import { getFanficContent } from "./get-fanfic-data";

const workId = "#work";

export async function checkBookmark() {
  let fanfic = await getFanficData(window.location.href);
  console.log(fanfic);
  if (!fanfic?.bookmark?.paragraphIndex) return;
  scrollToBookmark(fanfic.bookmark.paragraphIndex, fanfic.bookmark.scrollY);
}

function scrollToBookmark(index: number, scrollY: number) {
  let fanficText = getFanficContent();
  if (fanficText) {
    let paragraph = fanficText.children[index] as HTMLElement;
    paragraph.style.color = "green";
    setTimeout(() => window.scroll(0, scrollY), 1500);
    paragraph.addEventListener(
      "click",
      function () {
        this.style.color = "";
      },
      { once: true },
    );
  }
}

// It is possible to click on something besides <p>.
// This function ensures to get an actual paragraph
function getParagraph(clickedElement: HTMLElement) {
  if (clickedElement instanceof HTMLParagraphElement) {
    return clickedElement;
  }
  return clickedElement.parentElement;
}

// Saves bookmark data to open page on the specified scrollbar Y position and highlight selected paragraph
export async function saveBookmark(clickedElement: HTMLElement) {
  let fanficSections = getFanficContent()?.children;
  if (!fanficSections) return null;

  let paragraph = getParagraph(clickedElement);
  if (paragraph) {
    let index = [...fanficSections].indexOf(paragraph);
    let scrollY = window.scrollY;
    await updateFanfic(window.location.href, {
      bookmark: {
        url: window.location.href,
        paragraphIndex: index,
        scrollY,
      },
    });
    paragraph.style.color = "green";
  }
}

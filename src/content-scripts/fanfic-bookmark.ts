import {
  getFanficData,
  updateFanfic,
  splitUrlPathname,
} from "../services/fanfic-tracking";
import { getFanficContent } from "./get-fanfic-data";

export async function checkBookmark() {
  let fanfic = await getFanficData(window.location.href);
  if (fanfic) {
    let id = fanfic?.bookmark?.id;
    let parts = splitUrlPathname(window.location.href);
    if (id !== parts[parts.length - 1]) return;
    createBookmarkButton(
      fanfic.bookmark.paragraphIndex,
      fanfic.bookmark.scrollY,
    );
  }
}

function scrollToBookmark(index: number, scrollY: number) {
  let fanficText = getFanficContent();
  if (fanficText) {
    let paragraph = fanficText.children[index] as HTMLElement;
    paragraph.style.color = "#890000";
    window.scroll({
      top: scrollY,
      left: 0,
      behavior: "smooth",
    });
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

  let fanficUrl = window.location.href;
  let urlParts = splitUrlPathname(fanficUrl);
  let paragraph = getParagraph(clickedElement);
  if (paragraph) {
    let index = [...fanficSections].indexOf(paragraph);
    let scrollY = window.scrollY;
    await updateFanfic(fanficUrl, {
      bookmark: {
        url: fanficUrl,
        paragraphIndex: index,
        scrollY,
        // uses fanficId or chapterId (if it's a series) from a url, as a value for a bookmark
        id: urlParts[urlParts.length - 1],
      },
    });
    paragraph.style.color = "#890000";
  }
}

function createBookmarkButton(paragraphIndex: number, scrollY: number) {
  const host = document.createElement("div");
  host.id = "ao3-extension-root";

  const container = document.createElement("div");
  // styles classes are inside extension/styles/content-script.css
  container.classList.add("ext-bookmark");

  const bookmarkImage = createImage();
  container.addEventListener("click", () => {
    scrollToBookmark(paragraphIndex, scrollY);
    container.classList.add("ext-bookmark-hidden");
  });
  container.appendChild(bookmarkImage);
  host.appendChild(container);
  document.body.appendChild(host);
}

function createImage() {
  let image = document.createElement("img");
  image.src = chrome.runtime.getURL("assets/images/bookmark.svg");
  image.width = 35;
  image.height = 35;
  return image;
}

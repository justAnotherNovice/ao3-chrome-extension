import { getChapterId } from "../services/fanfic-tracking";

export function getFanficHeader() {
  let titleElement = document.querySelector("h2");
  let authorElement = titleElement?.nextElementSibling as HTMLElement;
  return {
    title: titleElement?.innerText?.trim(),
    author: authorElement?.innerText,
  };
}

export function getChapterTitle() {
  let title = document.querySelector("h3.title");
  return title instanceof HTMLElement ? title.innerText.trim() : "";
}

export function getFanficData(readingStatus: string) {
  let id = getChapterId(window.location.href);
  let fanfic: any = {
    ...getFanficHeader(),
    fandoms: getTagsData("fandom"),
    url: window.location.href,
    status: readingStatus,
    isOneShot: id ? false : true,
  };
  if (fanfic.isOneShot) {
    return fanfic;
  }
  return {
    ...fanfic,
    chapter: getChapterTitle(),
  };
}

function getTagsData(tagsClassName: string) {
  let list = document.querySelector(`dd.${tagsClassName}`)?.firstElementChild;
  if (list) {
    let listItems = [...list.children];
    return listItems.map((item) => {
      return item instanceof HTMLElement ? item.innerText : "";
    });
  }
}

// For link like https://archiveofourown.org/works/54713164/chapters/138662875
// We need to use parentElement to get fanfic paragraphs.
// For link like https://archiveofourown.org/works/54713164 we return sibling.
export function getFanficContent() {
  let work = document.querySelector("#work");
  let sibling = work?.nextElementSibling;
  if (sibling instanceof HTMLParagraphElement) {
    return work?.parentElement;
  }
  return sibling;
}

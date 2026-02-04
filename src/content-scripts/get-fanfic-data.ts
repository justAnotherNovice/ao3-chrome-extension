import {
  getChapterId,
  getFanficId,
  updateFanfic,
  getFanficData,
} from "../services/fanfic-tracking";

export function getFanficHeader() {
  let titleElement = document.querySelector("h2");
  let authorElement = titleElement?.nextElementSibling as HTMLElement;
  return {
    title: titleElement?.innerText?.trim(),
    author: authorElement?.innerText,
  };
}

export function getChapterInfo() {
  let title = document.querySelector("h3.title");
  let text = title instanceof HTMLElement ? title.innerText.trim() : "";
  let parts = text.split(" ", 2);
  let chapterNumber = parts[1];
  return { chapterNumber: parseInt(chapterNumber), chapter: text };
}

export async function collectFanficData(readingStatus: string) {
  let fanficId = await getFanficId(window.location.href);
  let id = getChapterId(window.location.href);
  let date = Date.now();
  let fanfic: any = {
    ...getFanficHeader(),
    fandoms: getTagsData("fandom"),
    url: window.location.href,
    status: readingStatus,
    chapterNumber: 1,
    id: fanficId,
    lastReadDate: date,
    startedDate: date,
    isOneShot: id ? false : true,
  };
  return addChapter(fanfic);
}

function addChapter(fanfic: any) {
  if (!fanfic.isOneShot) {
    return {
      ...fanfic,
      ...getChapterInfo(),
    };
  }
  return fanfic;
}

export async function updateChapter(isNextChapter: boolean) {
  let url = window.location.href;
  let fanfic = await getFanficData(url);
  if (!fanfic) return null;

  let { chapterNumber, chapter } = getChapterInfo();
  if (fanfic.chapterNumber + 1 !== chapterNumber) return null;

  await updateFanfic(url, {
    bookmark: {
      ...fanfic.bookmark,
      url: window.location.href,
    },
    chapter,
    chapterNumber,
  });
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

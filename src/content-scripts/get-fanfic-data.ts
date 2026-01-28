export function getFanficTitle() {
  return document.querySelector("h2")?.innerText;
}

export function getFanficData(readingStatus: string) {
  return {
    title: getFanficTitle(),
    fandoms: getTagsData("fandom.tags"),
    url: window.location.href,
    status: readingStatus,
  };
}

function getTagsData(tagsClassName: string) {
  let list = document.querySelector(`dd.${tagsClassName}`)?.firstElementChild;
  if (!list) return;

  let listItems = [...list.children];
  return listItems.map((item) => {
    let link = item?.firstElementChild;
    return link ? link.textContent : "";
  });
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

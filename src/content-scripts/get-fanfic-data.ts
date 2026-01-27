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

import { getUrl } from "./fanfic-tracking";

export async function checkWebsiteHostname() {
  let url = await getUrl();
  const targetHostname = "archiveofourown.org";
  return url ? targetHostname === new URL(url).hostname : false;
}

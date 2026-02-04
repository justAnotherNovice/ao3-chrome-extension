declare interface fanfic {
  id: string;
  title: string;
  status: string;
  fandoms: any[];
  url: string;
  isOneShot: boolean;
  chapter: string;
  chapterNumber: number;
  isNextChapter: boolean;
  lastReadDate: number;
  startedDate: number;
  bookmark: {
    id: string;
    url: string;
    scrollY: number;
    paragraphIndex: number;
  };
}

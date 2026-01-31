declare interface fanfic {
  title: string;
  fandoms: any[];
  url: string;
  isOneShot: boolean;
  lastReadDate: number;
  startedDate: number;
  bookmark: {
    id: string;
    url: string;
    scrollY: number;
    paragraphIndex: number;
  };
}

declare interface fanfic {
  title: string;
  fandoms: any[];
  url: string;
  isOneShot: boolean;
  bookmark: {
    id: string;
    url: string;
    scrollY: number;
    paragraphIndex: number;
  };
}

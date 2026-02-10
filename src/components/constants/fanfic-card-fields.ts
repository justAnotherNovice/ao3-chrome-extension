import { showCompletedDate, showDate } from "../../utils/show-date";
import pencil from "../../assets/images/pencil.svg";
import status from "../../assets/images/books.svg";
import lastRead from "../../assets/images/time-past.svg";
import startedReading from "../../assets/images/calendar-clock.svg";
import chapter from "../../assets/images/book-open.svg";
import completedDate from "../../assets/images/calendar-check.svg";
import kudos from "../../assets/images/heart.svg";
import download from "../../assets/images/file-download.svg";
import fanficType from "../../assets/images/book.svg";

const fanficFields = [
  {
    key: "author",
    icon: pencil,
    style: "sm:hidden",
  },
  {
    key: "isOneShot",
    icon: fanficType,
    style: "",
    format: (isOneShot: boolean) => (isOneShot ? "One Shot" : "Series"),
  },
  {
    key: "status",
    icon: status,
    style: "sm:hidden",
  },
  {
    key: "lastReadDate",
    icon: lastRead,
    style: "sm:hidden",
    format: showDate,
  },
  {
    key: "startedDate",
    icon: startedReading,
    style: "hidden sm:flex",
    format: showDate,
  },
  {
    key: "chapter",
    icon: chapter,
    style: "col-span-2  xl:col-span-1 xl:row-start-1",
  },
];

const optionalFields = [
  {
    key: "startedDate",
    icon: startedReading,
    style: "sm:hidden",
    format: showDate,
  },
  {
    key: "completedDate",
    icon: completedDate,
    style: "",
    format: showCompletedDate,
  },
  {
    key: "isKudosed",
    icon: kudos,
    style: "",
    format: (isKudosed: boolean) => (isKudosed ? "Kudosed" : "Not kudosed"),
  },
  {
    key: "isDownloaded",
    icon: download,
    style: "",
    format: (isDownloaded: boolean) =>
      isDownloaded ? "Downloaded" : "Not saved",
  },
];

export { fanficFields, optionalFields };

import { PropsWithChildren } from "react";
import FanficDetail from "./FanficDetail";
import pencil from "../../assets/images/pencil.svg";
import books from "../../assets/images/books.svg";
import calendar from "../../assets/images/calendar-clock.svg";

type Props = PropsWithChildren<{
  fanfic: any;
}>;

function FanficHeader({ fanfic }: Props) {
  console.log(fanfic);
  return (
    <>
      <h2 className="mt-3 text-lg text-center border-b-2 border-primary pb-2">
        {fanfic?.title}
      </h2>
      <div className="flex mt-3 justify-between">
        <FanficDetail
          img={books}
          alt="book status"
          detail={fanfic?.status}
          container={"justify-center w-[160px]"}
        />
        <FanficDetail
          img={calendar}
          alt="last read"
          detail={fanfic?.lastRead}
          container={"justify-center w-[160px]"}
        />
      </div>
      <FanficDetail
        img={pencil}
        alt="author pencil"
        detail={fanfic?.author}
        container={"mt-3"}
      />
    </>
  );
}

export default FanficHeader;

import { PropsWithChildren } from "react";
import FanficHeader from "./Fanfic/FanficHeader";
import Button from "../ui/Button/Button";
import FanficDetail from "./Fanfic/FanficDetail";
import chapter from "../assets/images/book-open.svg";

type Props = PropsWithChildren<{
  fanfic: fanfic;
}>;

function LastReadFanfics({ fanfic }: Props) {
  function openFanfic() {
    let url = fanfic?.bookmark ? fanfic?.bookmark.url : fanfic.url;
    window.open(url, "_blank");
  }

  return (
    <div className="pb-4 border-dashed border-gray-400 border-b-2">
      <FanficHeader fanfic={fanfic} />
      {fanfic?.chapter && (
        <FanficDetail
          img={chapter}
          alt="chapter image"
          detail={fanfic?.chapter}
          container={"mt-3"}
        />
      )}
      <div className="mt-2">
        <Button
          title="Continue"
          color="red"
          width="full"
          onClick={openFanfic}
        />
      </div>
    </div>
  );
}

export default LastReadFanfics;

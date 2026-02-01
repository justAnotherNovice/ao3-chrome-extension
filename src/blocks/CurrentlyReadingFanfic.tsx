import { PropsWithChildren } from "react";
import FanficHeader from "../components/Fanfic/FanficHeader";
import FanficDetail from "../components/Fanfic/FanficDetail";
import Button from "../ui/Button/Button";
import chapter from "../assets/images/book-open.svg";

type Props = PropsWithChildren<{
  fanfic: any;
  saveMark: () => void;
}>;

function CurrentlyReadingFanfic({ fanfic, saveMark }: Props) {
  return (
    <div className="p-2 font-serif">
      <FanficHeader fanfic={fanfic} />
      {fanfic?.chapter && (
        <FanficDetail
          img={chapter}
          alt="chapter image"
          detail={fanfic?.chapter}
          container={"mt-3"}
        />
      )}
      <div className="mt-3 flex justify-between">
        <Button title="Save Mark" color="red" width="half" onClick={saveMark} />
        <Button title="Drop" color="red" width="half" onClick={saveMark} />
      </div>
    </div>
  );
}

export default CurrentlyReadingFanfic;

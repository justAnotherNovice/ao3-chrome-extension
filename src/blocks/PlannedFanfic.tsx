import { PropsWithChildren } from "react";
import FanficHeader from "../components/Fanfic/FanficHeader";
import Button from "../ui/Button/Button";
import Accordion from "../ui/Accordion";
import bookmark from "../assets/images/bookmark-feature.svg";
import viewInfo from "../assets/images/eye.svg";
import lastRead from "../assets/images/time-past.svg";

type Props = PropsWithChildren<{
  fanfic: any;
}>;

function PlannedFanfic({ fanfic }: Props) {
  return (
    <div className="p-2 font-serif">
      <FanficHeader fanfic={fanfic} />
      <div className="flex flex-col justify-between mt-2 text-base">
        <Button
          title="Start reading"
          color="red"
          width="full"
          onClick={() => null}
        />
        <Accordion title="Click a button to get such features">
          <ul className="pb-2">
            <li className="flex mt-2 border-b bg-white py-[5px] rounded-lg">
              <img className="ml-2" src={bookmark} width={20} height={20} />
              <span className="ml-2">saving reading position and chapter</span>
            </li>
            <li className="flex mt-2 border-b bg-white py-[5px] rounded-lg">
              <img className="ml-2" src={viewInfo} width={20} height={20} />
              <span className="ml-2">look for kudos or downloaded info</span>
            </li>
            <li className="flex mt-2 border-b bg-white py-[5px] rounded-lg">
              <img className="ml-2" src={lastRead} width={20} height={20} />
              <span className="ml-2">
                return to last read fanfic from other sites
              </span>
            </li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
}

export default PlannedFanfic;

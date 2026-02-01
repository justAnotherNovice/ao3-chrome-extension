import { PropsWithChildren } from "react";
import FanficHeader from "../components/Fanfic/FanficHeader";
import Button from "../ui/Button/Button";
import Accordion from "../ui/Accordion";

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
            <li className="mt-2 border-b bg-white py-1 px-4 rounded-lg">
              saving reading position and chapter
            </li>
            <li className="mt-2 border-b bg-white py-1 px-4 rounded-lg">
              look for kudos or downloaded info
            </li>
            <li className="mt-2 border-b bg-white py-1 px-4 rounded-lg">
              return to last read fanfic from other sites
            </li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
}

export default PlannedFanfic;

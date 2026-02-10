import { PropsWithChildren, useState } from "react";
import { showDate } from "../../utils/show-date";
import CardDetail from "./CardDetail";
import { fanficFields, optionalFields } from "../constants/fanfic-card-fields";
import arrow from "../../assets/images/angle-right.svg";

type Props = PropsWithChildren<{
  fanfic: any;
}>;

function FanficCardProfile({ fanfic }: Props) {
  let [isOptionalFileds, setIsOptionalFileds] = useState(false);
  return (
    <>
      <div className="flex text-center items-center py-3 px-2">
        <span className="w-[100%] sm:w-[50%]">{fanfic.title}</span>
        <span className="hidden w-[25%] sm:block">{fanfic.author}</span>
        <span className="hidden w-[12%] sm:block">{fanfic.status}</span>
        <span className="hidden w-[13%] sm:block">
          {showDate(fanfic.lastReadDate)}
        </span>
      </div>
      <div className="pt-2 px-2 border-t-2 border-primary grid gap-x-2 gap-y-3 grid-cols-2 sm:grid-cols-3">
        {fanficFields.map((field) => (
          <CardDetail key={field.key} fanfic={fanfic} cardField={field} />
        ))}
      </div>
      <div
        className="flex justify-between py-1 pl-2 mx-1 mt-4 mb-1 rounded-lg cursor-pointer hover:bg-gray-200 sm:hidden"
        onClick={() => setIsOptionalFileds(!isOptionalFileds)}
      >
        <span>Additional information</span>
        <img src={arrow} width={20} height={20} alt="arrow rigth" />
      </div>
      <div
        className={
          "px-2 grid gap-x-2 gap-y-3 grid-cols-2 sm:h-auto sm:mt-3 sm:grid-cols-3 " +
          (isOptionalFileds ? "" : "h-0 overflow-y-hidden")
        }
      >
        {optionalFields.map((field) => (
          <CardDetail key={field.key} fanfic={fanfic} cardField={field} />
        ))}
      </div>
    </>
  );
}

export default FanficCardProfile;

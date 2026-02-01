import { PropsWithChildren, ReactNode } from "react";
import { useState } from "react";
import angleRight from "../assets/images/angle-right.svg";

type Props = PropsWithChildren<{
  title: string;
  children: ReactNode;
}>;

function Accordion({ title, children }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="mt-3" onClick={() => setIsOpened(!isOpened)}>
      <div className="flex justify-between p-2 border-primary border-b-2 bg-white rounded-lg cursor-pointer">
        <p>{title}</p>
        <img src={angleRight} width={20} height={20} alt="" />
      </div>
      {isOpened && children}
    </div>
  );
}

export default Accordion;

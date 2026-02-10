import { PropsWithChildren, useState } from "react";
import arrow from "../../assets/images/angle-right.svg";

type Props = PropsWithChildren<{
  header: string;
  options: string[];
}>;

function FilterCategory({ header, options }: Props) {
  let [isOpened, setIsOpened] = useState(false);
  let headerActive = isOpened
    ? "bg-blue-200 hover:bg-none"
    : "hover:bg-gray-50";
  return (
    <li className={`mt-1 w-[95%]`}>
      <p
        className={`flex justify-between font-semibold p-[5px] pl-2 rounded-lg cursor-pointer ${headerActive}`}
        onClick={() => setIsOpened(!isOpened)}
      >
        {header}
        <img src={arrow} width={20} height={20} alt="arrow icon" />
      </p>
      <ul className={`mt-2 pl-2 ${isOpened ? "" : "h-0 overflow-hidden"}`}>
        {options.map((option: string, index: number) => (
          <li
            key={index}
            className="flex items-center py-[5px] pl-[10px] rounded-lg hover:bg-gray-50"
          >
            <input className="w-4 h-4" type="checkbox" />
            <span className="ml-2">{option}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default FilterCategory;

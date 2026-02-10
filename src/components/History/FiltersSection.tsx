import { PropsWithChildren } from "react";
import FilterCategory from "./FilterCategory";

type Props = PropsWithChildren<{
  isVisible: boolean;
}>;

const readingStatus = ["Reading", "Planned", "Completed", "Dropped"];
const actions = ["Kudos", "Download"];

function FiltersSection({ isVisible }: Props) {
  return (
    <aside
      className={`${isVisible ? "pt-10" : "hidden"} w-[280px] fixed bg-white h-screen md:block md:static`}
    >
      <h1 className="text-lg pl-3 pt-3">Ao3 extension</h1>
      <div className="pl-3 mt-7">
        <h3 className="text-gray-400">Filters</h3>
        <ul className="mt-3">
          <FilterCategory header="Reading status" options={readingStatus} />
          <FilterCategory header="Actions" options={actions} />
        </ul>
      </div>
    </aside>
  );
}

export default FiltersSection;

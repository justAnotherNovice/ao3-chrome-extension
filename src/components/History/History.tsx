import { useState } from "react";
import menuBurger from "../../assets/images/menu-burger.svg";
import FiltersSection from "./FiltersSection";

function History() {
  let [filterVisibility, setFilterVisibility] = useState(false);
  return (
    <div className="flex h-screen">
      <FiltersSection isVisible={filterVisibility} />
      <div className="w-[100%]">
        <header className="flex fixed bg-white w-[100%] h-[50px] items-center pl-5">
          <span
            className="md:hidden"
            onClick={() => setFilterVisibility(!filterVisibility)}
          >
            <img src={menuBurger} width={27} height={27} alt="menu icon" />
          </span>
        </header>
        <main className="w-[100%] min-h-screen sm:p-5 bg-gray-200"></main>
      </div>
    </div>
  );
}

export default History;

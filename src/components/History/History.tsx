import { PropsWithChildren, useState } from "react";
import menuBurger from "../../assets/images/menu-burger.svg";
import FiltersSection from "./FiltersSection";
import FanficCard from "./FanficCard";

type Props = PropsWithChildren<{
  fanfics: any[];
}>;

function History({ fanfics }: Props) {
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
        <main className="w-[100%] min-h-screen sm:p-5 bg-gray-200">
          <section>
            <h2 className="text-lg text-center pt-20 sm:text-left">
              Your Fanfics
            </h2>
            <article className="hidden mt-5 items-center text-center bg-white h-8 rounded-lg px-2 sm:flex">
              <span className="w-[50%]">Title</span>
              <span className="w-[25%]">Author</span>
              <span className="w-[12%]">Status</span>
              <span className="w-[13%]">Last read</span>
            </article>
            {fanfics.map((fanfic) => (
              <FanficCard fanfic={fanfic} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default History;

import { PropsWithChildren, useState } from "react";
import FanficCardTabs from "./FanficCardTabs";
import FanficCardProfile from "./FanficCardProfile";

type Props = PropsWithChildren<{
  fanfic: any;
}>;

const fanficTabs: any = {
  Profile: (fanfic: any) => <FanficCardProfile fanfic={fanfic} />,
};

function FanficCard({ fanfic }: Props) {
  let [selectedTab, setSelectedTab] = useState("Profile");

  function showTab() {
    if (fanficTabs[selectedTab]) {
      return fanficTabs[selectedTab](fanfic);
    }
  }

  return (
    <article className="bg-white rounded-lg mt-4 w-[360px] overflow-hidden mx-auto sm:w-auto">
      {showTab()}
      <FanficCardTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </article>
  );
}

export default FanficCard;

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  selectedTab: string;
  setSelectedTab: React.Dispatch<any>;
}>;

function Tab({ tabTitle, selectedTab, setSelectedTab }: any) {
  let isActive = tabTitle === selectedTab && "border-b-primary border-b-2";
  return (
    <span className={"p-2 cursor-pointer " + isActive} onClick={setSelectedTab}>
      {tabTitle}
    </span>
  );
}

function FanficCardTabs({ selectedTab, setSelectedTab }: Props) {
  return (
    <div className="flex items-center mt-1 pr-2">
      <Tab
        tabTitle="Profile"
        selectedTab={selectedTab}
        setSelectedTab={() => setSelectedTab("Profile")}
      />
      <Tab
        tabTitle="Fandoms"
        selectedTab={selectedTab}
        setSelectedTab={() => setSelectedTab("Fandoms")}
      />
      <Tab
        tabTitle="Characters"
        selectedTab={selectedTab}
        setSelectedTab={() => setSelectedTab("Characters")}
      />
      <Tab
        tabTitle="Tags"
        selectedTab={selectedTab}
        setSelectedTab={() => setSelectedTab("Tags")}
      />
    </div>
  );
}

export default FanficCardTabs;

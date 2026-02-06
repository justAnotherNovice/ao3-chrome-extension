/*
  This file is only for viewing/changing the components style classes on the development server.
  It was made because of the tailwind css I decided to use for this project.
*/
import TrackFanfic from "./components/TrackFanfic/TrackFanfic";
import { useState } from "react";
import CurrentlyReadingFanfic from "./blocks/CurrentlyReadingFanfic";
import PlannedFanfic from "./blocks/PlannedFanfic";
import Welcome from "./components/Welcome";
import History from "./components/History";
import Accordion from "./ui/Accordion";

const fanfic: any = {
  title: "Kink Profiles of Canon Females of the Multiverse",
  author: "Prismatic_Eye",
  status: "",
  lastReadDate: 1769970891048,
  chapter: "Harley Quinn (Clown Princess of Chaos)",
  isTracking: false,
};

function ComponentSelector({ title, setComponent }: any) {
  return (
    <button
      className="p-2 border-primary border rounded-lg hover:bg-primary hover:text-white"
      onClick={setComponent}
    >
      {title}
    </button>
  );
}

const components = {
  reading: (fanficInfo: any) => (
    <CurrentlyReadingFanfic fanfic={fanficInfo} saveMark={() => null} />
  ),
  planned: (fanficInfo: any) => <PlannedFanfic fanfic={fanficInfo} />,
  track: (header: any) => (
    <TrackFanfic
      header={header}
      onReadLater={() => null}
      onStartReading={() => null}
    />
  ),
  welcome: <Welcome />,
  history: <History />,
};

function AppDev() {
  const [component, setComponent] = useState<any>({
    title: "",
    selected: components["welcome"],
  });
  let [toggleControls, setToggleControls] = useState(false);

  function onReadLater() {
    setComponent({
      title: "Read later",
      selected: components["planned"]({
        ...fanfic,
        isTracking: true,
        status: "Read Later",
      }),
    });
  }

  function onStartReading() {
    setComponent({
      title: "Reading",
      selected: components["reading"]({
        ...fanfic,
        isTracking: true,
        status: "Reading",
      }),
    });
  }

  return (
    <div className="flex flex-col">
      <div
        className="absolute right-[48%] z-99 w-12 h-2 bottom-2 border-4 border-black rounded-lg cursor-pointer"
        onClick={() => setToggleControls(!toggleControls)}
      ></div>
      <div
        className={`flex justify-between w-[30%] mx-auto relative ${toggleControls ? "h-0 overflow-hidden" : "my-3"}`}
      >
        <ComponentSelector
          title="Welcome"
          setComponent={() =>
            setComponent({ title: "Welcome", selected: components["welcome"] })
          }
        />
        <ComponentSelector
          title="Tracking"
          setComponent={() =>
            setComponent({
              title: "Tracking",
              selected: components["track"]({
                title: fanfic?.title,
                author: fanfic?.author,
              }),
            })
          }
        />
        <ComponentSelector title="Reading" setComponent={onStartReading} />
        <ComponentSelector title="Planned" setComponent={onReadLater} />
        <ComponentSelector
          title="History"
          setComponent={() =>
            setComponent({ title: "History", selected: components["history"] })
          }
        />
      </div>
      {component.title === "History" ? (
        component.selected
      ) : (
        <div
          className={`box-content font-serif bg-[#F3F3F3] w-[356px] mx-auto`}
        >
          {component.selected}
        </div>
      )}
    </div>
  );
}

export default AppDev;

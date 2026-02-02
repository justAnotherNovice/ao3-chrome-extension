/*
  This file is only for viewing/changing the components style classes on the development server.
  It was made because of the tailwind css I decided to use for this project.
*/
import TrackFanfic from "./components/TrackFanfic/TrackFanfic";
import { useState } from "react";
import CurrentlyReadingFanfic from "./blocks/CurrentlyReadingFanfic";
import PlannedFanfic from "./blocks/PlannedFanfic";
import Welcome from "./components/Welcome";

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
};

function AppDev() {
  const [component, setComponent] = useState<any>(components["welcome"]);

  function onReadLater() {
    setComponent(
      components["planned"]({
        ...fanfic,
        isTracking: true,
        status: "Read Later",
      }),
    );
  }

  function onStartReading() {
    setComponent(
      components["reading"]({
        ...fanfic,
        isTracking: true,
        status: "Reading",
      }),
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex my-5 justify-between w-[25%]">
        <ComponentSelector
          title="Welcome"
          setComponent={() => setComponent(components["welcome"])}
        />
        <ComponentSelector
          title="Tracking"
          setComponent={() =>
            setComponent(
              components["track"]({
                title: fanfic?.title,
                author: fanfic?.author,
              }),
            )
          }
        />
        <ComponentSelector title="Reading" setComponent={onStartReading} />
        <ComponentSelector title="Planned" setComponent={onReadLater} />
      </div>
      <div className={`box-content font-serif bg-[#F3F3F3] w-[356px]`}>
        {component}
      </div>
    </div>
  );
}

export default AppDev;

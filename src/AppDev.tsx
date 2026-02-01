import TrackFanfic from "./components/TrackFanfic/TrackFanfic";
import { useState } from "react";
import CurrentlyReadingFanfic from "./blocks/CurrentlyReadingFanfic";
import PlannedFanfic from "./blocks/PlannedFanfic";
import { sendMessage } from "./utils/send-message";

const fanfic: any = {
  title: "Kink Profiles of Canon Females of the Multiverse",
  author: "Prismatic_Eye",
  status: "",
  lastReadDate: 1769970891048,
  chapter: "Harley Quinn (Clown Princess of Chaos)",
  isTracking: false,
};

function AppDev() {
  const [fanficInfo, setFanficInfo] = useState(fanfic);

  function onReadLater() {
    setFanficInfo({
      ...fanficInfo,
      isTracking: true,
      status: "Read Later",
    });
  }

  function onStartReading() {
    setFanficInfo({
      ...fanficInfo,
      isTracking: true,
      status: "Reading",
    });
  }

  return (
    <div className="flex justify-center">
      <div className={`box-content font-serif bg-[#F3F3F3] w-[356px]`}>
        {fanficInfo?.isTracking ? (
          fanficInfo?.status === "Read Later" ? (
            <PlannedFanfic fanfic={fanficInfo} />
          ) : (
            <CurrentlyReadingFanfic
              fanfic={fanficInfo}
              saveMark={() => sendMessage("SAVE_BOOKMARK")}
            />
          )
        ) : (
          <TrackFanfic
            header={{ title: fanficInfo?.title, author: fanficInfo?.author }}
            onReadLater={onReadLater}
            onStartReading={onStartReading}
          />
        )}
      </div>
    </div>
  );
}

export default AppDev;

import Fanfic from "./components/Fanfic/Fanfic";
import TrackFanfic from "./components/TrackFanfic/TrackFanfic";
import { useState } from "react";

const fanfic: any = {
  title: "BoruSara Week 2024 One Shot Collection",
};

function AppDev() {
  const [isTracking, setIsTracking] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] h-[250px] ">
        {isTracking ? (
          <Fanfic fanfic={fanfic} saveMark={() => null} />
        ) : (
          <TrackFanfic
            title={fanfic?.title}
            onReadLater={() => setIsTracking(false)}
            onStartReading={() => setIsTracking(true)}
          />
        )}
      </div>
    </div>
  );
}

export default AppDev;

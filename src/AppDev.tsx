import Fanfic from "./components/Fanfic/Fanfic";
import TrackFanfic from "./components/TrackFanfic/TrackFanfic";
import { useState } from "react";

const fanfic: any = {
  title: "Stalking her possession (caitvi stalker vi x police caitlyn)",
};

function AppDev() {
  const [isTracking, setIsTracking] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="box-content font-serif bg-[#FAFAFA] w-[400px] h-[250px]">
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

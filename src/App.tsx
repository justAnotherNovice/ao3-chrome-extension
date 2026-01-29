import TrackFanficContainer from "./components/TrackFanfic/TrackFanficContainer";
import { sendMessage } from "./utils/send-message";
import { useEffect, useState } from "react";
import { getFanficData } from "./services/fanfic-tracking";
import FanficContainer from "./components/Fanfic/FanficContainer";

function App() {
  const [fanfic, setFanfic] = useState<any | undefined>(undefined);

  function setFanficData(fanfic: any) {
    setFanfic(fanfic);
  }

  useEffect(() => {
    async function getFanfic() {
      if (!fanfic) {
        let fanficData: any = await getFanficData();
        if (fanficData?.title) {
          setFanfic(fanficData);
        } else {
          sendMessage("GET_TITLE");
        }
      }
    }
    getFanfic();
  }, []);

  return (
    <div className="box-content font-serif bg-[#FAFAFA] h-[260px]">
      {fanfic ? (
        <FanficContainer fanfic={fanfic} />
      ) : (
        <TrackFanficContainer setFanficData={setFanficData} />
      )}
    </div>
  );
}

export default App;

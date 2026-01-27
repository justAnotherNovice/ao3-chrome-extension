import TrackFanfic from "./components/TrackFanfic/TrackFanfic";
import { sendMessage } from "./utils/send-message";
import { useEffect, useState } from "react";
import { getFanficData } from "./services/fanfic-tracking";
import Fanfic from "./components/Fanfic/Fanfic";

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
    <div className="App">
      {fanfic ? (
        <Fanfic fanfic={fanfic} />
      ) : (
        <TrackFanfic setFanficData={setFanficData} />
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { checkWebsiteHostname } from "./services/get-url-info";
import FanficInfo from "./components/Fanfic/FanficInfo";
import { getLastReadFanfics } from "./services/fanfic-tracking";
import Welcome from "./components/Welcome";
import LastReadFanfic from "./components/LastReadFanfic";

function App() {
  const [isTarget, setIsTarget] = useState(false);
  const [lastRead, setLastRead] = useState<fanfic[]>([]);

  useEffect(() => {
    async function getTargetWebsite() {
      let isTarget = await checkWebsiteHostname();
      if (!isTarget) {
        let lastRead = await getLastReadFanfics();
        setLastRead(lastRead);
      }
      setIsTarget(isTarget);
    }
    getTargetWebsite();
  }, []);

  return (
    <div className="box-content font-serif bg-[#F3F3F3]">
      {isTarget ? (
        <FanficInfo />
      ) : !lastRead || lastRead.length === 0 ? (
        <Welcome />
      ) : (
        <div className="h-[500px] p-[10px] overflow-x-hidden overflow-y-scroll space-y-6">
          {lastRead.map((fanfic) => (
            <LastReadFanfic fanfic={fanfic} key={fanfic.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { checkWebsiteHostname } from "./services/get-url-info";
import FanficInfo from "./components/Fanfic/FanficInfo";
import { getLastReadFanfics } from "./services/fanfic-tracking";
import Welcome from "./components/Welcome";
import LastReadFanfic from "./components/LastReadFanfic";
import Button from "./ui/Button/Button";

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

  function openHistory() {
    let url = chrome.runtime.getURL("history.html");
    window.open(url, "_blank");
  }

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
          <Button
            title="Open history"
            width="full"
            color="blue"
            onClick={openHistory}
          />
        </div>
      )}
    </div>
  );
}

export default App;

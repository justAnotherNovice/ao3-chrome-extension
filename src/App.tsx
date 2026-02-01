import { useEffect, useState } from "react";
import { checkWebsiteHostname } from "./services/get-url-info";
import FanficInfo from "./components/Fanfic/FanficInfo";
import { getLastReadFanfics } from "./services/fanfic-tracking";
import Welcome from "./components/Welcome";

function App() {
  const [isTarget, setIsTarget] = useState(false);
  const [lastRead, setLastRead] = useState<unknown[]>([]);

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
        <h1>last read fanfics component</h1>
      )}
    </div>
  );
}

export default App;

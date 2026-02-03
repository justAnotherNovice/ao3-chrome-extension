import { PropsWithChildren, useEffect, useState } from "react";
import {
  addFanficToLastRead,
  getFanficData,
} from "../../services/fanfic-tracking";
import { sendMessage } from "../../utils/send-message";
import FanficContainer from "./FanficContainer";
import TrackFanficContainer from "../TrackFanfic/TrackFanficContainer";

type Props = PropsWithChildren<{}>;

function FanficInfo({}: Props) {
  const [fanfic, setFanfic] = useState<Partial<fanfic>>({});

  function setFanficData(fanfic: any) {
    setFanfic(fanfic);
  }

  useEffect(() => {
    async function getFanfic() {
      let fanficData: any = fanfic.id ? fanfic : await getFanficData();
      if (fanficData?.status === "Reading") {
        await addFanficToLastRead(fanficData);
      }
      if (fanficData?.status && !fanfic?.status) {
        setFanfic(fanficData);
        return null;
      }
      sendMessage("GET_TITLE");
    }
    getFanfic();
  }, [fanfic.status]);

  return (
    <div className="box-content font-serif bg-[#F3F3F3]">
      {fanfic.status ? (
        <FanficContainer fanfic={fanfic} />
      ) : (
        <TrackFanficContainer setFanficData={setFanficData} />
      )}
    </div>
  );
}

export default FanficInfo;

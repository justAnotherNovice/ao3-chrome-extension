import { PropsWithChildren, useEffect, useState } from "react";
import { getFanficData } from "../../services/fanfic-tracking";
import { sendMessage } from "../../utils/send-message";
import FanficContainer from "./FanficContainer";
import TrackFanficContainer from "../TrackFanfic/TrackFanficContainer";

type Props = PropsWithChildren<{}>;

function FanficInfo({}: Props) {
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
    <div className="box-content font-serif bg-[#F3F3F3]">
      {fanfic ? (
        <FanficContainer fanfic={fanfic} />
      ) : (
        <TrackFanficContainer setFanficData={setFanficData} />
      )}
    </div>
  );
}

export default FanficInfo;

import { useState } from "react";
import useMessage from "../../utils/useMessage";
import { sendMessage } from "../../utils/send-message";
import { PropsWithChildren } from "react";
import {
  addFanficToLastRead,
  saveFanfic,
} from "../../services/fanfic-tracking";
import TrackFanfic from "./TrackFanfic";

type Props = PropsWithChildren<{
  setFanficData: (fanfic: any) => void;
}>;

function TrackFanficContainer({ setFanficData }: Props) {
  const [header, setHeader] = useState({ title: "", author: "" });

  useMessage(async (message: any) => {
    if (message.action === "GET_TITLE") {
      setHeader({ title: message.title, author: message.author });
    }
    if (message.action === "GET_FANFIC") {
      let fanfic = message.fanfic;
      await saveFanfic(message.fanfic);
      if (fanfic?.status === "Reading") {
        await addFanficToLastRead(fanfic.id);
      }
      setFanficData(message.fanfic);
    }
  });

  return (
    <TrackFanfic
      header={header}
      onReadLater={() => sendMessage("GET_FANFIC", { status: "Read Later" })}
      onStartReading={() => sendMessage("GET_FANFIC", { status: "Reading" })}
    />
  );
}

export default TrackFanficContainer;

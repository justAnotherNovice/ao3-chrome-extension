import Button from "../../ui/Button/Button";
import { useState } from "react";
import useMessage from "../../utils/useMessage";
import { sendMessage } from "../../utils/send-message";
import { PropsWithChildren } from "react";
import { saveFanfic } from "../../services/fanfic-tracking";

type Props = PropsWithChildren<{
  setFanficData: (fanfic: any) => void;
}>;

function TrackFanfic({ setFanficData }: Props) {
  const [title, setTitle] = useState("");

  useMessage(async (message: any) => {
    if (message.action === "GET_TITLE") {
      setTitle(message.title);
    }
    if (message.action === "GET_FANFIC") {
      await saveFanfic(message.fanfic);
      setFanficData(message.fanfic);
    }
  });

  return (
    <div>
      <h2>{title}</h2>
      <Button
        title="Start reading"
        onClick={() => sendMessage("GET_FANFIC", { status: "Reading" })}
      />
      <Button
        title="Read later"
        onClick={() => sendMessage("GET_FANFIC", { status: "Read Later" })}
      />
    </div>
  );
}

export default TrackFanfic;

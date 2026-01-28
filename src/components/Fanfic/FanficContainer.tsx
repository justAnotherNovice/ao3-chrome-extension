import { PropsWithChildren } from "react";
import { sendMessage } from "../../utils/send-message";
import Fanfic from "./Fanfic";

type Props = PropsWithChildren<{
  fanfic: any;
}>;

function FanficContainer({ fanfic }: Props) {
  return (
    <Fanfic fanfic={fanfic} saveMark={() => sendMessage("SAVE_BOOKMARK")} />
  );
}

export default FanficContainer;

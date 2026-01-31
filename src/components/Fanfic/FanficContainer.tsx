import { PropsWithChildren } from "react";
import { sendMessage } from "../../utils/send-message";
import PlannedFanfic from "../../blocks/PlannedFanfic";
import CurrentlyReadingFanfic from "../../blocks/CurrentlyReadingFanfic";

type Props = PropsWithChildren<{
  fanfic: any;
}>;

function FanficContainer({ fanfic }: Props) {
  return (
    <>
      {fanfic?.status === "Read Later" ? (
        <PlannedFanfic fanfic={fanfic} />
      ) : (
        <CurrentlyReadingFanfic
          fanfic={fanfic}
          saveMark={() => sendMessage("SAVE_BOOKMARK")}
        />
      )}
    </>
  );
}

export default FanficContainer;

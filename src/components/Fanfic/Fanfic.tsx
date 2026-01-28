import { PropsWithChildren } from "react";
import Button from "../../ui/Button/Button";
import { sendMessage } from "../../utils/send-message";

type Props = PropsWithChildren<{
  fanfic: any;
}>;

function Fanfic({ fanfic }: Props) {
  console.log(fanfic.fandoms);
  return (
    <div>
      <p>{fanfic?.url}</p>
      <p>{fanfic?.status}</p>
      <p>{fanfic?.title}</p>
      <Button title="Save Mark" onClick={() => sendMessage("SAVE_BOOKMARK")} />
    </div>
  );
}

export default Fanfic;

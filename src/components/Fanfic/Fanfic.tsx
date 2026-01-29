import { PropsWithChildren } from "react";
import Button from "../../ui/Button/Button";

type Props = PropsWithChildren<{
  fanfic: any;
  saveMark: () => void;
}>;

function Fanfic({ fanfic, saveMark }: Props) {
  return (
    <div>
      <p>{fanfic?.url}</p>
      <p>{fanfic?.status}</p>
      <p>{fanfic?.title}</p>
      <Button title="Save Mark" color="red" onClick={saveMark} />
    </div>
  );
}

export default Fanfic;

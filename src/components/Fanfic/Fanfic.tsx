import { PropsWithChildren } from "react";

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
    </div>
  );
}

export default Fanfic;

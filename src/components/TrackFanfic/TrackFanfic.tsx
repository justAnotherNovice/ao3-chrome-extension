import Button from "../../ui/Button/Button";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  onReadLater: () => void;
  onStartReading: () => void;
}>;

function TrackFanfic({ title, onReadLater, onStartReading }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <Button title="Start reading" onClick={onStartReading} />
      <Button title="Read later" onClick={onReadLater} />
    </div>
  );
}

export default TrackFanfic;

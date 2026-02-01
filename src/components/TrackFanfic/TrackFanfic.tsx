import Button from "../../ui/Button/Button";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  header: {
    title: string;
    author: string;
  };
  onReadLater: () => void;
  onStartReading: () => void;
}>;

function TrackFanfic({ header, onReadLater, onStartReading }: Props) {
  return (
    <div className="pb-10">
      <div className="flex items-center justify-center bg-gradient-to-b from-[#890000] from-40% to-white h-[90px] py-2">
        <h2 className="text-white text-center text-xl">{header.title}</h2>
      </div>
      <div className="flex flex-col items-center justify-between h-[100px] mt-8">
        <h3 className="text-base font-semibold">by {header.author}</h3>
        <div className="flex justify-between w-[270px]">
          <Button
            title="Start reading"
            color="red"
            width="half"
            onClick={onStartReading}
          />
          <Button
            title="Read later"
            color="blue"
            width="half"
            onClick={onReadLater}
          />
        </div>
      </div>
    </div>
  );
}

export default TrackFanfic;

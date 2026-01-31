import Button from "../../ui/Button/Button";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  onReadLater: () => void;
  onStartReading: () => void;
}>;

function TrackFanfic({ title, onReadLater, onStartReading }: Props) {
  return (
    <div className="pb-10">
      <div className="bg-gradient-to-b from-[#890000] from-40% to-white h-[90px] py-2">
        <h2 className="text-white text-center text-xl">{title}</h2>
      </div>
      <div className="flex flex-col items-center justify-between h-[100px] mt-8">
        <h3 className="text-base font-semibold">by saladsandbolts</h3>
        <div className="flex justify-between w-[270px]">
          <Button title="Start reading" color="red" onClick={onStartReading} />
          <Button title="Read later" color="blue" onClick={onReadLater} />
        </div>
      </div>
    </div>
  );
}

export default TrackFanfic;

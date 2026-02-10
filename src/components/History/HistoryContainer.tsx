import { PropsWithChildren } from "react";
import History from "./History";

type Props = PropsWithChildren<{}>;

function HistoryContainer({}: Props) {
  return <History fanfics={[]} />;
}

export default HistoryContainer;

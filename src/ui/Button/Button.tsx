import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  onClick: React.Dispatch<any>;
}>;

function Button({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>;
}

export default Button;

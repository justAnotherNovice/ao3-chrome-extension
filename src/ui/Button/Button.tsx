import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  color: string;
  onClick: React.Dispatch<any>;
}>;

function Button({ title, color, onClick }: Props) {
  const base = "w-[130px] p-1 text-lg rounded-lg border transition";
  const colors: any = {
    blue: "text-white bg-blue-700 border-transparent hover:bg-blue-900",
    red: "text-[#890000] border border-[#890000] hover:bg-[#890000] hover:text-white",
  };
  return (
    <button className={`${base} ${colors[color]}`} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  color: string;
  width: string;
  onClick: React.Dispatch<any>;
}>;

function Button({ title, width, color, onClick }: Props) {
  const base = "p-1 text-base rounded-lg border transition";
  const colors: any = {
    blue: "text-white bg-blue-700 border-transparent hover:bg-blue-900",
    red: "text-primary border border-primary hover:bg-primary hover:text-white",
  };
  const size: any = { full: "w-[100%]", half: "w-[48%]" };
  return (
    <button
      className={`${base} ${colors[color]} ${size[width]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;

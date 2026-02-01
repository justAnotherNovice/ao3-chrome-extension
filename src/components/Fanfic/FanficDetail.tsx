import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  container: string;
  img: string;
  alt: string;
  detail: string;
}>;

function FanficDetail({ img, detail, alt, ...rest }: Props) {
  const base = "flex py-2 px-3 bg-white rounded-lg";
  return (
    <div className={`${base} ${rest.container}`}>
      <img src={img} width={20} height={20} alt={alt} />
      <span className="text-base ml-3">{detail}</span>
    </div>
  );
}

export default FanficDetail;

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  fanfic: any;
  cardField: any;
}>;

function CardDetail({ fanfic, cardField }: Props) {
  let description = fanfic[cardField.key];
  return (
    <div
      className={
        "flex items-center p-1 pl-2 rounded-lg border-b border-gray-400 sm:w-auto " +
        cardField.style
      }
    >
      <img
        src={cardField.icon}
        width={20}
        height={20}
        alt={cardField.key + " icon"}
      />
      <span className="ml-3">
        {cardField.format ? cardField.format(description) : description}
      </span>
    </div>
  );
}

export default CardDetail;

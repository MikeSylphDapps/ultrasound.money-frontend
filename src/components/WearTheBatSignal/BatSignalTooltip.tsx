import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { FC } from "react";
import closeSvg from "../../assets/close.svg";
import { TooltipTitle } from "../Texts";
import BodyTextV2 from "../TextsNext/BodyTextV2";
import LabelText from "../TextsNext/LabelText";

type Props = {
  className?: string;
  onClickClose: () => void;
};

const BatSignalTooltip: FC<Props> = ({ className = "", onClickClose }) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
    }}
    className={`
      flex flex-col gap-y-4
      bg-blue-tangaroa p-8 rounded-lg
      border border-blue-shipcove
      text-left
      ${className}
    `}
  >
    <button
      className={`
        flex w-6
        active:brightness-90 hover:brightness-110
        select-none self-end
      `}
    >
      <Image
        alt="a close button, circular with an x in the middle"
        draggable={false}
        height={24}
        layout="fixed"
        onClick={onClickClose}
        src={closeSvg as StaticImageData}
        width={24}
      />
    </button>
    <TooltipTitle>Wearing the bat signal</TooltipTitle>
    <LabelText>a section label</LabelText>
    <BodyTextV2>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </BodyTextV2>
  </div>
);

export default BatSignalTooltip;

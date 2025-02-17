import type { FC } from "react";
import type { EthSupply } from "../../api/eth-supply";
import { TooltipTitle } from "../Texts";
import BodyText from "../TextsNext/BodyText";
import LabelText from "../TextsNext/LabelText";
import PreciseEth from "./PreciseEth";

const CurrentSupplyTooltip: FC<{
  ethSupply: EthSupply;
  onClickClose: () => void;
}> = ({ ethSupply, onClickClose }) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
    }}
    className={`
      relative
      flex w-[22rem] flex-col
      gap-y-4 rounded-lg border
      border-blue-shipcove bg-blue-tangaroa
      p-8
    `}
  >
    <img
      alt="a close button, circular with an x in the middle"
      className="absolute right-5 top-5 w-6 cursor-pointer select-none hover:brightness-90 active:brightness-110"
      onClick={onClickClose}
      src="/close.svg"
    />
    <img
      alt=""
      className="mx-auto h-20 w-20 select-none rounded-full"
      src={"/round-nerd-large.svg"}
    />
    <TooltipTitle>ETH supply breakdown</TooltipTitle>
    <LabelText>formula</LabelText>
    <div className="flex flex-col">
      <BodyText>supply = EVM balances +</BodyText>
      <div className="ml-[69px] md:ml-[77px]">
        <BodyText inline={false}>beacon balances -</BodyText>
        <BodyText>beacon chain deposits</BodyText>
      </div>
    </div>
    <LabelText>EVM balances</LabelText>
    <PreciseEth justify="justify-end">
      {ethSupply?.executionBalancesSum.balancesSum}
    </PreciseEth>
    <LabelText>beacon chain balances</LabelText>
    <PreciseEth justify="justify-end">
      {ethSupply?.beaconBalancesSum.balancesSum}
    </PreciseEth>
    <LabelText>beacon chain deposits</LabelText>
    <PreciseEth justify="justify-end">
      {ethSupply?.beaconDepositsSum.depositsSum}
    </PreciseEth>
  </div>
);

export default CurrentSupplyTooltip;

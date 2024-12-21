import totalStyles from "./styles/Total.module.css";

interface Props {
  mainText: string;
  amount: number;
}

const Total = ({ mainText, amount }: Props) => {
  return (
    <div className={totalStyles.totalDiv}>
      <div className={totalStyles.heading}>
        <div className={totalStyles.mainHeading}>{mainText}</div>
        <div className={totalStyles.subHeading}>/ person</div>
      </div>
      <div className={totalStyles.amountDiv}>${amount.toFixed(2)}</div>
    </div>
  );
};

export default Total;

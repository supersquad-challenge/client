import TwoTitleBlock from '@/components/base/block/TwoTitleBlock';
import { colors } from '@/styles/color';

const PurpleGradientTwoTitleBlock = () => {
  //dummy data
  const totalCryptoDeposit = 1500;
  const cryptoYieldBoost = 0.05;
  return (
    <TwoTitleBlock
      title1="Total Crypto Deposit"
      content1={`$${totalCryptoDeposit}`}
      title2="Crypto Yield Boost"
      content2={`+$${cryptoYieldBoost}`}
      background="linear-gradient(to right, #d6c0f0, #8a01d7)"
      color1={colors.black}
      color2="white"
    />
  );
};

export default PurpleGradientTwoTitleBlock;

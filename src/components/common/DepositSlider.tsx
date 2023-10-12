import React, { Dispatch, SetStateAction, useState } from 'react';
import { useRecoilState } from 'recoil';

interface IDepositSlider {
  deposit: number;
  setDeposit: Dispatch<SetStateAction<number>>;
}

const DepositSlider = ({ deposit, setDeposit }: IDepositSlider) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="200"
        value={deposit}
        onChange={handleChange}
        color="purple"
      />
    </div>
  );
};

export default DepositSlider;

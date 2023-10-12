import { colors } from '@/styles/color';

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
        background-color={colors.darkPurple}
      />
    </div>
  );
};

export default DepositSlider;

// import styled from 'styled-components';
// import { colors } from '@/styles/color';
// import React, { Dispatch, SetStateAction } from 'react';

// interface IDepositSlider {
//   deposit: number;
//   setDeposit: Dispatch<SetStateAction<number>>;
// }

// const StyledInput = styled.input`
//   /* Webkit browsers like Chrome, Safari */
//   &::-webkit-slider-runnable-track {
//     background: ${colors.darkPurple};
//     border-radius: 6px;
//   }
//   &::-webkit-slider-thumb {
//     background: ${colors.darkPurple};
//     -webkit-appearance: none;
//     height: 16px;
//     width: 16px;
//   }

//   /* Firefox */
//   &::-moz-range-track {
//     background: ${colors.darkPurple};
//     border-radius: 6px;
//   }
//   &::-moz-range-thumb {
//     background: ${colors.darkPurple};
//     height: 16px;
//     width: 16px;
//   }
// `;

// const DepositSlider = ({ deposit, setDeposit }: IDepositSlider) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDeposit(parseInt(e.target.value, 10));
//   };

//   return (
//     <div>
//       <StyledInput
//         type="range"
//         min="0"
//         max="200"
//         value={deposit}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default DepositSlider;

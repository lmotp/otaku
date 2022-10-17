import React, { useState } from 'react';
import styled from 'styled-components';
import PagiNationButton from './PagiNationButton';

const buttonMocking = Array(5)
  .fill('')
  .map((v, i) => i + 1);

const PagiNation = () => {
  const [actvieButton, setActiveButton] = useState<number>(1);

  const onChangeActiveButton = (value: number) => {
    setActiveButton(value);
  };

  return (
    <ButtonWrap>
      {buttonMocking.map((number) => {
        return (
          <PagiNationButton
            key={number}
            buttonIndex={number}
            active={actvieButton === number}
            onChangeActiveButton={onChangeActiveButton}
          />
        );
      })}
    </ButtonWrap>
  );
};

export default PagiNation;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  gap: 10px;
  width: 100%;
`;

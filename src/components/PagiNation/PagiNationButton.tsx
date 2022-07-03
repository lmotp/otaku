import React from 'react';
import styled from 'styled-components';
import { IPagiNation } from '../../typings/PagiNation';

const PagiNationButton = ({ buttonIndex, active, onChangeActiveButton }: IPagiNation) => {
  return (
    <MoveButton active={active} onClick={() => onChangeActiveButton(buttonIndex)}>
      {buttonIndex}
    </MoveButton>
  );
};

export default PagiNationButton;

const MoveButton = styled.button<{ active: boolean }>`
  width: 28px;
  height: 28px;
  border: 1px solid #01f5bb;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? '#01f5bb' : '#ffffff')};
  color: ${(props) => (props.active ? '#ffffff' : '#01f5bb')};

  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: #01f5bb;
    color: #ffffff;
  }
`;

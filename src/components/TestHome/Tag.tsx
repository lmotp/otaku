import React from 'react';
import styled from 'styled-components';
import { ITag } from '../../typings/TestHomeType';

const Tag = ({ buttonTag, active, onChangeActiveButton }: ITag) => {
  return (
    <Button active={active} onClick={() => onChangeActiveButton(buttonTag)}>
      # {buttonTag}
    </Button>
  );
};

export default Tag;

const Button = styled.button<{ active: boolean }>`
  width: 125px;
  height: 40px;
  background-color: ${(props) => `${props.active ? '#01f5bb' : '#ffffff'}`};
  border: 1px solid #01f5bb;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => `${props.active ? '#ffffff' : '#01f5bb'}`};

  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: #01f5bb;
    color: #ffffff;
  }
`;

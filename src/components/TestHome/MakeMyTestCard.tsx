import React from 'react';
import styled from 'styled-components';

const MakeMyTestCard = () => {
  const test = () => {
    console.log('test');
  };
  return (
    <MakeMyTestCardWrap>
      <MakeMyTestButton onClick={test}></MakeMyTestButton>
    </MakeMyTestCardWrap>
  );
};

export default MakeMyTestCard;

const MakeMyTestCardWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 240px;
  height: 210px;
  border: 2px dashed #01f5bb;
  border-radius: 20px;
  background-color: rgba(1, 245, 187, 0.1);
  cursor: pointer;
`;

const MakeMyTestButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(10, 16, 69, 0.2);

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 3px;
    background-color: #01f5bb;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

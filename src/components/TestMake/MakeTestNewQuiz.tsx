import React from 'react';
import styled from 'styled-components';

interface MakeTestNewQuizProps {
  onAddQuizItem: () => void;
}

const MakeTestNewQuiz = ({ onAddQuizItem }: MakeTestNewQuizProps) => {
  return (
    <MakeTestNewQuizWrap onClick={onAddQuizItem}>
      <MakeTestNewQuizButton />
      <MakeTestNewQuizExplanation>클릭해서 문제를 추가해보세요 !</MakeTestNewQuizExplanation>
    </MakeTestNewQuizWrap>
  );
};

export default MakeTestNewQuiz;

const MakeTestNewQuizWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 90px;
  width: 48%;
  height: 260px;
  border: 2px dashed #01f5bb;
  border-radius: 20px;
  background-color: rgba(1, 245, 187, 0.1);
  cursor: pointer;
`;

const MakeTestNewQuizButton = styled.button`
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

const MakeTestNewQuizExplanation = styled.strong`
  font-weight: 700;
  color: #01f5bb;
`;

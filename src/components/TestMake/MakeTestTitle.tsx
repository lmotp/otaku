import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface MakeTestContentProps {
  testInfoValue: string;
  onchangeInfoValue: (e: ChangeEvent<HTMLInputElement>) => void;
}
const MakeTestTitle = ({ testInfoValue, onchangeInfoValue }: MakeTestContentProps) => {
  return (
    <>
      <Title htmlFor="title">테스트 제목</Title>
      <InputWrap>
        <Input
          id="title"
          type="text"
          placeholder="테스트 제목을 적어주세요"
          value={testInfoValue}
          onChange={onchangeInfoValue}
        />
      </InputWrap>
    </>
  );
};

export default MakeTestTitle;

const Title = styled.label`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 700;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 10px;
  width: 50%;
  height: 30px;
  border-left: 3px solid #01f5bb;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.125rem;
  font-weight: 700;
  outline: none;
  border: none;

  &::placeholder {
    font-weight: 400;
    color: #bdbdbd;
  }
`;

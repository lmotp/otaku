import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface MakeTestContentProps {
  testInfoValue: string;
  onchangeInfoValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MakeTestContent = ({ testInfoValue, onchangeInfoValue }: MakeTestContentProps) => {
  return (
    <>
      <Title htmlFor="content">테스트 소개</Title>
      <TextAreaWrap>
        <TextArea
          id="content"
          placeholder="테스트 제목을 적어주세요"
          value={testInfoValue}
          onChange={onchangeInfoValue}
        />
      </TextAreaWrap>
    </>
  );
};

export default MakeTestContent;

const Title = styled.label`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 700;
`;

const TextAreaWrap = styled.div`
  margin-bottom: 30px;
  padding-left: 10px;
  width: 50%;
  height: 60px;
  border-left: 3px solid #01f5bb;
`;

const TextArea = styled.textarea`
  padding-top: 2px;
  box-sizing: border-box;
  width: 100%;
  height: inherit;
  font-size: 0.875rem;
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    font-size: 0.875rem;
    font-weight: 400;
    color: #bdbdbd;
  }
`;

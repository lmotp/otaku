import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../components/common/SubTitle';
import Tag from '../components/common/Tag';
import MakeTestContent from '../components/TestMake/MakeTestContent';
import MakeTestQuiz from '../components/TestMake/MakeTestQuiz';
import MakeTestTitle from '../components/TestMake/MakeTestTitle';

const buttonTag = ['남자아이돌', '여자아이돌', '솔로가수', '배우', '작가', '기타'];
const quizMocking = [
  {
    id: 1,
    question: '질문을 입력하세요',
    examples: [
      { id: 1, example: '답 1번의 예시입니다.' },
      { id: 2, example: '답 2번의 예시입니다.' },
      { id: 3, example: '답 3번의 예시입니다.' },
      { id: 4, example: '답 4번의 예시입니다.' },
      { id: 5, example: '답 5번의 예시입니다.' },
    ],
    answer: 2,
  },
  {
    id: 2,
    question: '질문을 입력하세요',
    examples: [
      { id: 1, example: '답 1번의 예시입니다.' },
      { id: 2, example: '답 2번의 예시입니다.' },
      { id: 3, example: '답 3번의 예시입니다.' },
      { id: 4, example: '답 4번의 예시입니다.' },
      { id: 5, example: '답 5번의 예시입니다.' },
    ],
    answer: 2,
  },
  {
    id: 3,
    question: '질문을 입력하세요',
    examples: [
      { id: 1, example: '답 1번의 예시입니다.' },
      { id: 2, example: '답 2번의 예시입니다.' },
      { id: 3, example: '답 3번의 예시입니다.' },
      { id: 4, example: '답 4번의 예시입니다.' },
      { id: 5, example: '답 5번의 예시입니다.' },
    ],
    answer: 2,
  },
];

const TestMake = () => {
  const [actvieButton, setActiveButton] = useState<string>('');
  const [testTitle, setTextTitle] = useState<string>('');
  const [testContent, setTextContent] = useState<string>('');

  const onChangeActiveButton = (value: string) => {
    setActiveButton(value);
  };

  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTextTitle(e.target.value);
  };
  const onchangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  return (
    <section>
      <SubTitle title="테스트 만들기" marginBottom={30} />
      <MakeTestTitle testInfoValue={testTitle} onchangeInfoValue={onchangeTitle} />
      <MakeTestContent testInfoValue={testContent} onchangeInfoValue={onchangeContent} />

      <TagTitle>
        카테고리 <span> * 만드실 테스트의 카테고리를 선택해주세요.</span>
      </TagTitle>
      <TagWrap>
        {buttonTag.map((tag, index) => {
          return (
            <Tag
              key={index}
              buttonTag={tag}
              active={actvieButton === tag}
              onChangeActiveButton={onChangeActiveButton}
            />
          );
        })}
      </TagWrap>

      <QuizContainer>
        {quizMocking.map((info) => {
          return <MakeTestQuiz quizInfo={info} key={info.id} />;
        })}
      </QuizContainer>
    </section>
  );
};

export default TestMake;

const TagWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 50px;
`;

const TagTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;

  font-size: 1rem;
  font-weight: 700;

  span {
    font-size: 0.75rem;
  }
`;

const QuizContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

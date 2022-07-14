import React, { ChangeEvent, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
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
      { id: 1, example: '답 1231번의 예시입니다.' },
      { id: 2, example: '답 1232번의 예시입니다.' },
      { id: 3, example: '답 3123번의 예시입니다.' },
      { id: 4, example: '답 1234번의 예시입니다.' },
      { id: 5, example: '답 5123번의 예시입니다.' },
    ],
    answer: 2,
  },
  {
    id: 2,
    question: '질문을 입력하세요2',
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
    question: '질문을 입력하세요3',
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
    id: 4,
    question: '질문을 입력하세요4',
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
  const [testQuizList, setQuizTestList] = useState(quizMocking);

  const onChangeActiveButton = (value: string) => {
    setActiveButton(value);
  };

  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTextTitle(e.target.value);
  };
  const onchangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(quizMocking);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setQuizTestList(items);
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

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="testQuizList">
          {(provided) => (
            <QuizContainer {...provided.droppableProps} ref={provided.innerRef}>
              {testQuizList.map((info, index) => {
                return <MakeTestQuiz key={info.id} quizInfo={info} index={index} id={String(info.id)} />;
              })}
            </QuizContainer>
          )}
        </Droppable>
      </DragDropContext>
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
  column-width: 635px;
  column-gap: 30px;
`;

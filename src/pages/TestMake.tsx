import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../components/common/SubTitle';
import Tag from '../components/common/Tag';
import MakeTestContent from '../components/TestMake/MakeTestContent';
import MakeTestNewQuiz from '../components/TestMake/MakeTestNewQuiz';
import MakeTestQuiz from '../components/TestMake/MakeTestQuiz';
import MakeTestTitle from '../components/TestMake/MakeTestTitle';
import MakteTestSaveButton from '../components/TestMake/MakteTestSaveButton';

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
  const containerRef = useRef<any>(null);

  const onChangeActiveButton = (value: string) => {
    setActiveButton(value);
  };

  // 제목, 설명문 onChange 값
  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTextTitle(e.target.value);
  };
  const onchangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  // 메뉴 드래그 앤 드랍 함수
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setQuizTestList((items) => {
        const oldIndex = items.findIndex(({ id }) => id === active.id);
        const newIndex = items.findIndex(({ id }) => id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // 메뉴 삭제 함수
  const onDeletQuizItem = (itemId: number) => {
    const confirmState = window.confirm('삭제하시겠습니까?');

    if (confirmState) {
      setQuizTestList(
        testQuizList.filter((info) => {
          return info.id !== itemId;
        }),
      );
    }
  };

  // 메뉴 추가 함수
  const onAddQuizItem = () => {
    const newQuizItem = {
      id: testQuizList.length + 1,
      question: '질문을 입력하세요4',
      examples: [
        { id: 1, example: '답 1번의 예시입니다.' },
        { id: 2, example: '답 2번의 예시입니다.' },
        { id: 3, example: '답 3번의 예시입니다.' },
        { id: 4, example: '답 4번의 예시입니다.' },
        { id: 5, example: '답 5번의 예시입니다.' },
      ],
      answer: 2,
    };

    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }); //살짝 보이게끔 추가작업이 필요

    setQuizTestList([...testQuizList, newQuizItem]);
  };

  return (
    <section>
      <TestMakeHeader>
        <SubTitle title="테스트 만들기" marginBottom={30} />
        {testQuizList.length >= 5 && <MakteTestSaveButton />}
      </TestMakeHeader>
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
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <QuizContainer ref={containerRef}>
          <SortableContext items={testQuizList.map((info) => info.id)} strategy={rectSortingStrategy}>
            {testQuizList.map((info, index) => {
              return (
                <MakeTestQuiz
                  key={info.id}
                  quizInfo={info}
                  index={info.id}
                  cardIndex={index + 1}
                  handle={true}
                  id={info.id}
                  onDeletQuizItem={onDeletQuizItem}
                />
              );
            })}
          </SortableContext>
          {testQuizList.length < 10 && <MakeTestNewQuiz onAddQuizItem={onAddQuizItem} />}
        </QuizContainer>
      </DndContext>
    </section>
  );
};

export default TestMake;

const TestMakeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 60px;
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
  flex-wrap: wrap;
  justify-content: space-between;
  column-width: 635px;
`;

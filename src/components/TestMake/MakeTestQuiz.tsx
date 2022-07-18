import React, { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import { IQuizInfo } from '../../typings/TestMake';
import { ReactComponent as MoveMenu } from '../../assets/imgs/move-menu.svg';
import { ReactComponent as Trash } from '../../assets/imgs/trash.svg';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface QuizInfoProps {
  quizInfo: IQuizInfo;
  onDeletQuizItem: (itemId: number) => void;
  index: number;
  id: number;
  handle: boolean;
}

const MakeTestQuiz = ({ quizInfo, id, onDeletQuizItem }: QuizInfoProps) => {
  const [quizType, setQuizType] = useState<string>('A타입');
  const [addContentState, setAddContentState] = useState<boolean>(false);
  const textAreaRef = useRef<any>(null);

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const onQuizTypeChange = (type: string) => {
    setQuizType(type);
  };

  const autoResizeTextarea = () => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  };

  const onAddQuizContent = () => {
    setAddContentState(true);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: 'inline-block',
    width: '48%',
    backgroundColor: '#ffffff',
    paddingBottom: '90px',
    zIndex: isDragging ? '100' : 'auto',
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <li ref={setNodeRef} style={style}>
      <QuizTopWrap>
        <QuizTopWrapLeft>
          <Qusetion>
            Q{quizInfo.id}. {quizInfo.question}
          </Qusetion>
          <div>
            <QuizType buttonType={quizType === 'A타입'} onClick={() => onQuizTypeChange('A타입')}>
              A타입
            </QuizType>
            <QuizType buttonType={quizType === 'B타입'} onClick={() => onQuizTypeChange('B타입')}>
              B타입
            </QuizType>
          </div>
        </QuizTopWrapLeft>
        <QuizTopWrapRight>
          <IconMoveMenu {...listeners} {...attributes} />
          <IconTrash onClick={() => onDeletQuizItem(id)} />
        </QuizTopWrapRight>
      </QuizTopWrap>
      {addContentState ? (
        <QuizTextAreaWrap>
          <QuizContentsTextArea
            ref={textAreaRef}
            placeholder="문제의 보기를 입력해주세요!"
            onChange={autoResizeTextarea}
          />
        </QuizTextAreaWrap>
      ) : (
        <QuizContents>
          <QuizContentsButton onClick={onAddQuizContent} />
        </QuizContents>
      )}
      <QuizBottomWrap buttonType={quizType}>
        {quizInfo.examples.map((item) => (
          <QuizExampleWrap key={item.id} buttonType={quizType}>
            <QuizExampleButton>{item.id}</QuizExampleButton>
            <QuizExample>{item.example}</QuizExample>
          </QuizExampleWrap>
        ))}
      </QuizBottomWrap>
    </li>
  );
};

export default memo(MakeTestQuiz);

const QuizTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  width: 100%;
`;

const QuizTopWrapLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Qusetion = styled.strong`
  font-size: 1.125rem;
  font-weight: 700;
`;

const QuizType = styled.button<{ buttonType: Boolean }>`
  padding: 0 1px;
  box-sizing: border-box;
  font-size: 0.875rem;
  font-weight: 300;
  border-bottom: 2px solid;
  border-color: ${(props) => (props.buttonType ? '#304674' : 'transparent')};
  color: #304674;

  transition: border-bottom 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid #304674;
  }

  & + & {
    margin-left: 10px;
  }
`;

const QuizTopWrapRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconMoveMenu = styled(MoveMenu)`
  cursor: move;
`;
const IconTrash = styled(Trash)`
  cursor: pointer;
`;

const QuizTextAreaWrap = styled.div`
  box-sizing: border-box;
  padding: 20px 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 8px;
  border: 1px dashed #304674;
`;

const QuizContentsTextArea = styled.textarea`
  display: block; // textarea는 chrome에서 마진 2값이 존재함 그래서 block으로 처리해줘야 함
  box-sizing: border-box;
  line-height: 1.5;
  padding: 0;
  width: 100%;
  outline: none;
  resize: none;
  border: none;
  overflow-y: hidden;
`;

const QuizContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 10px;
  width: 100%;
  border: 1px dashed #304674;
  border-radius: 8px;
`;

const QuizContentsButton = styled.button`
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
    background-color: #304674;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const QuizBottomWrap = styled.ul<{ buttonType: string }>`
  display: flex;
  justify-content: ${(props) => (props.buttonType === 'A타입' ? 'flex-start' : 'space-between')};
  align-items: flex-start;
  flex-direction: ${(props) => (props.buttonType === 'A타입' ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.buttonType === 'A타입' ? 'no-wrap' : 'wrap')};
  padding-left: 10px;
`;

const QuizExampleWrap = styled.li<{ buttonType: string }>`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  gap: 6px;
  width: ${(props) => (props.buttonType === 'A타입' ? '100%' : '50%')};

  &:last-child {
    padding-bottom: 0;
  }
`;

const QuizExampleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #000000;
  border-radius: 50%;
`;

const QuizExample = styled.div`
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

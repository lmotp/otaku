import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from '../common/Modal';
import UserTestCard from '../TestHome/UserTestCard';
import { ReactComponent as Waring } from '../../assets/imgs/Waring.svg';

import whee1 from '../../assets/imgs/whee1.jfif';

const mokingHotUserItem = { id: 1, src: whee1, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' };

const MakteTestSaveButton = () => {
  const [hoverState, setHoverState] = useState(false);
  const [modalState, setModalState] = useState(false);

  const onCloseModal = (e: any) => {
    if (e.target.classList.contains('modal')) {
      setModalState(false);
    }
  };

  return (
    <>
      <ButtonShadow
        hoverState={hoverState}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        onClick={() => setModalState(true)}
      >
        <ButtonWrap>
          <Button hoverState={hoverState}>완료</Button>
          <ButtonUnderLine hoverState={hoverState}>WAVELINE</ButtonUnderLine>
        </ButtonWrap>
      </ButtonShadow>

      <Modal width="600px" modalState={modalState} onCloseModal={onCloseModal}>
        <WaringIcon />
        <ModalStrong>썸네일을 등록하세요 !</ModalStrong>
        <UserTestCard
          cardInfoObj={mokingHotUserItem}
          styleProps={{
            width: '308px',
            height: '460px',
          }}
          titleSize="1.5rem"
          buttonStyleProps={{ buttonSize: '16px', width: '154px', height: '44px' }}
        />
        <ModalButtonWrap>
          <ModalButton>저장</ModalButton>
          <ModalButton onClick={onCloseModal}>닫기</ModalButton>
        </ModalButtonWrap>
      </Modal>
    </>
  );
};

export default MakteTestSaveButton;
const waveMove = keyframes`
  0% {
    transform: translate(-5px, -15px);
  }
  
  100% {
    transform: translate(5px, -15px);
  }

`;

const ButtonShadow = styled.div<{ hoverState: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: ${(props) => (props.hoverState ? '#ffffff' : '#01f5bb')};
  box-shadow: 0 0 5px rgba(1, 245, 187, 0.6), 0 0 10px rgba(1, 245, 187, 0.4), 0 0 15px rgba(1, 245, 187, 0.2);

  transition: background-color 0.5s ease-in-out;
`;

const ButtonWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 8px;
  width: 70px;
  overflow: hidden;
  cursor: pointer;
`;

const Button = styled.button<{ hoverState: boolean }>`
  position: relative;
  font-size: 1rem;
  color: ${(props) => (props.hoverState ? '#01f5bb' : '#ffffff')};

  transition: color 0.5s ease-in-out;
`;

const ButtonUnderLine = styled.div<{ hoverState: boolean }>`
  color: transparent;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-style: wavy;
  text-decoration-thickness: 2px;
  text-decoration-color: ${(props) => (props.hoverState ? '#01f5bb' : '#ffffff')};
  transform: translate(0, -15px);

  transition: text-decoration-color 0.5s ease-in-out;
  animation: ${waveMove} 1s infinite linear;
`;

// 썸네일
const WaringIcon = styled(Waring)`
  margin-bottom: 12px;
`;

const ModalStrong = styled.strong`
  font-size: 1.125rem;
  margin-bottom: 21px;
`;

const ModalButtonWrap = styled.div`
  width: 100%;
  margin-top: 80px;
  background-color: black;
`;

const ModalButton = styled.button`
  padding: 14px;
  width: 50%;
  color: #ffffff;

  &:first-child {
    border-right: 1px solid #ffffff;
  }
`;
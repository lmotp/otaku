import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Modal from '../common/Modal';
import UserTestCard from '../TestHome/UserTestCard';
import { ReactComponent as Waring } from '../../assets/imgs/Waring.svg';

import whee1 from '../../assets/imgs/whee1.jfif';

const mokingHotUserItem = { id: 1, src: whee1, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' };

interface modifyModalStyle {
  modifycolorState?: boolean;
  modifyThumbnailState?: boolean;
  modalState?: boolean;
}

const MakteTestSaveButton = () => {
  const [hoverState, setHoverState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modifyThumbnailState, setModifyThumbnailState] = useState(false);
  const [modifycolorState, setModifyColorState] = useState(false);
  const [colorDisabled, setColorDisabled] = useState(false);
  const [thumbnailDisabled, setThumbnailDisabled] = useState(false);

  const onCloseModal = (e: any) => {
    setModalState(false);
    setModifyColorState(false);
    setModifyThumbnailState(false);
  };

  const onModifyThumbnailModal = () => {
    setThumbnailDisabled(true);
    setModifyThumbnailState(!modifyThumbnailState);
    setTimeout(() => {
      setThumbnailDisabled(false);
    }, 2000);
  };

  const onModifyColorModal = () => {
    setColorDisabled(true);
    setModifyColorState(!modifycolorState);
    setTimeout(() => {
      setColorDisabled(false);
    }, 2000);
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

      <Modal width="600px" modalState={modalState}>
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
        <div>
          <ModalCardModifyButton
            modifycolorState={modifycolorState}
            modalState={modalState}
            disabled={colorDisabled}
            onClick={onModifyColorModal}
          />
          <ModalCardModifyButton
            modifyThumbnailState={modifyThumbnailState}
            modalState={modalState}
            disabled={thumbnailDisabled}
            onClick={onModifyThumbnailModal}
          />
        </div>
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

// 모달창 움직일 때 애니메이션
const modifyThumbnailModalOpen = keyframes`
  0% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  50% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transform: translateX(150px);
  }
  
  100% {
    width: 150px;
    height: 150px;
    border-radius: 6px;
    transform: translate(240px, -60px);
    opacity: 1;

  }
`;

const modifyThumbnailModalClose = keyframes`
  0% {
    width: 150px;
    height: 150px;
    border-radius: 6px;
    transform: translate(240px, -60px);
    opacity: 1;
  }

  50% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transform: translateX(150px);
  }
  
  100% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transform: translate(0, 0);
    opacity: 0.2;
  }
`;

const modifyColorModalOpen = keyframes`
  0% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  50% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transform: translateX(-150px);
  }

  100% {
    width: 150px;
    height: 150px;
    border-radius: 6px;
    transform: translate(-240px, 60px);
    opacity: 1;
  }
`;

const modifyColorModalClose = keyframes`
  0% {
    width: 150px;
    height: 150px;
    border-radius: 6px;
    transform: translate(-240px, 60px);
    opacity: 1;
  }

  50% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transform: translateX(-150px);
  }

  100% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transform: translate(0, 0);
    opacity: 0.2;
  }
`;

//모달창 파동
const modifyButtonWave = keyframes`
  0% {
    width: 46px;
    height: 46px;
    opacity: 0;
  }

  100% {
    width: 46px;
      height: 46px;
      opacity: 1;
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

const ModalCardModifyButton = styled.button<modifyModalStyle>`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #01f5bb;
  opacity: 0.2;
  transform-origin: left center;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 2px solid #01f5bb;

    transform: translate(-50%, -50%);

    ${(props) =>
      props.modalState &&
      css`
        animation: ${modifyButtonWave} 2s ease-in-out infinite;
      `}
  }

  &:first-child {
    bottom: 140px;
    left: 50px;

    ${(props) =>
      props.modifycolorState
        ? css`
            animation: ${modifyColorModalOpen} 2s ease-in-out 1 both;
          `
        : css`
            animation: ${modifyColorModalClose} 2s ease-in-out 1 both;
          `}
  }

  &:last-child {
    top: 140px;
    right: 50px;

    ${(props) =>
      props.modifyThumbnailState
        ? css`
            animation: ${modifyThumbnailModalOpen} 2s ease-in-out 1 both;
          `
        : css`
            animation: ${modifyThumbnailModalClose} 2s ease-in-out 1 both;
          `}
  }
`;

const ModalButtonWrap = styled.div`
  width: 100%;
  margin-top: 80px;
  background-color: black;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const ModalButton = styled.button`
  padding: 14px;
  width: 50%;
  color: #ffffff;

  &:first-child {
    border-right: 1px solid #ffffff;
  }
`;

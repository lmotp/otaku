import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Modal from '../common/Modal';
import UserTestCard from '../TestHome/UserTestCard';
import { ReactComponent as Waring } from '../../assets/imgs/Waring.svg';

import whee1 from '../../assets/imgs/whee1.jfif';
import MakeTestModifyColorModal from './MakeTestModifyColorModal';
import MakeTestModifyThumbnailModal from './MakeTestModifyThumbnailModal';

const mokingHotUserItem = { id: 1, src: whee1, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' };

interface modifyModalStyle {
  modifycolorState?: boolean;
  modifyThumbnailState?: boolean;
  colorButtonWaveState?: boolean;
  thumbnailButtonWaveState?: boolean;
}

const MakteTestSaveButton = () => {
  const [hoverState, setHoverState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modifyThumbnailState, setModifyThumbnailState] = useState(false);
  const [modifycolorState, setModifyColorState] = useState(false);
  const [colorDisabled, setColorDisabled] = useState(false);
  const [thumbnailDisabled, setThumbnailDisabled] = useState(false);
  const [colorButtonWaveState, setColorButtonWaveState] = useState(false);
  const [thumbnailButtonWaveState, setThumbnailButtonWaveState] = useState(false);
  const [colorTest, setColorTest] = useState(false);
  const [thumbnailTest, setThumbnailTest] = useState(false);

  //모달 닫고 모달관련 setState 초기화
  const onCloseModal = () => {
    setModalState(false);
    setModifyColorState(false);
    setModifyThumbnailState(false);
  };

  //썸네일 모달
  const onModifyThumbnailModal = () => {
    setThumbnailDisabled(true);
    setModifyThumbnailState(!modifyThumbnailState);
    setThumbnailButtonWaveState(!thumbnailButtonWaveState);
    setTimeout(() => {
      if (!modifyThumbnailState) {
        setThumbnailTest(true);
      }
      setThumbnailDisabled(false);
    }, 2000);

    if (modifyThumbnailState) {
      setThumbnailTest(false);
    }
  };

  //컬러 모달
  const onModifyColorModal = () => {
    setColorDisabled(true);
    setModifyColorState(!modifycolorState);
    setColorButtonWaveState(!colorButtonWaveState);
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
        onClick={() => {
          setModalState(true);
          setThumbnailButtonWaveState(true);
          setColorButtonWaveState(true);
        }}
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
            colorButtonWaveState={colorButtonWaveState}
            disabled={colorDisabled}
            onClick={onModifyColorModal}
          >
            {colorTest && <MakeTestModifyColorModal />}
          </ModalCardModifyButton>

          <ModalCardModifyButton
            modifyThumbnailState={modifyThumbnailState}
            thumbnailButtonWaveState={thumbnailButtonWaveState}
            disabled={thumbnailDisabled}
            onClick={onModifyThumbnailModal}
          >
            {thumbnailTest && <MakeTestModifyThumbnailModal />}
          </ModalCardModifyButton>
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
//물결 표시 애니메이션
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
    padding: 0;

  }

  50% {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transform: translateX(150px);
  }
  
  100% {
    width: auto;
    height: auto;
    border-radius: 6px;
    transform: translateX(240px);
    padding: 20px;
  }
`;

const modifyThumbnailModalClose = keyframes`
  0% {
    width: auto;
    height: auto;
    border-radius: 6px;
    transform: translateX(240px);
    padding: 20px;
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
    transform: translateX(0);
    padding: 0;
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
    transform: translateX(-240px);
  }

  100% {
    width: auto;
    height: auto;
    border-radius: 6px;
    transform: translateX(-240px);
    padding: 20px;
  }
`;

const modifyColorModalClose = keyframes`
  0% {
    width: auto;
    height: auto;
    border-radius: 6px;
    transform: translateX(-240px);
    padding: 20px;
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
    transform: translateX();
    padding: 0;
  }
`;

//모달창 파동
const modifyButtonWave = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
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

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #01f5bb;
    z-index: -1;

    transform: scale(0);
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

    &::after,::before {
      ${(props) =>
        props.colorButtonWaveState &&
        css`
          animation: ${modifyButtonWave} 2s infinite ease-out;
        `}
    }

    &:after {
      animation-delay: 1.5s;
    }
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

    &::after,::before {
      ${(props) =>
        props.thumbnailButtonWaveState &&
        css`
          animation: ${modifyButtonWave} 2s infinite ease-out;
        `}
    }

    &:after {
      animation-delay: 1.5s;
    }
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

import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IModal } from '../../typings/Common';

const Modal = ({ modalState, width, children }: IModal) => {
  return (
    <ModalContainer className="modal" modalState={modalState}>
      <ModalContent width={width}>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const ModalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalContainer = styled.div<{ modalState: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 1100;

  ${(props) =>
    props.modalState &&
    css`
      display: flex;
      align-items: center;
      animation: ${ModalBgShow} 0.3s;
    `}
`;

const ModalContent = styled.div<{ width: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  margin: 0 auto;
  width: ${(props) => props.width};
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(200, 200, 200, 0.5);

  animation: ${ModalShow} 0.3s;
`;

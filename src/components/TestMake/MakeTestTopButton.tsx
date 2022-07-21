import React from 'react';
import styled from 'styled-components';

const MakeTestTopButton = () => {
  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ButtonWrap>
      <Button onClick={onScrollToTop}>완료하러가기</Button>
    </ButtonWrap>
  );
};

export default MakeTestTopButton;

const ButtonWrap = styled.div`
  position: fixed;
  right: 40px;
  bottom: 60px;
  display: flex;
  justify-content: center;
  width: 50px;
`;

const Button = styled.button`
  text-align: center;
  width: 20px;
  line-height: 2;
  color: #01f5bb;
  text-shadow: 0 0 3px #09a78250;
`;

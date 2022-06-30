import React from 'react';
import styled from 'styled-components';
import { UserTestCardType } from '../../pages/TestHome';

interface UserTestCardProps {
  cardInfoObj: UserTestCardType;
}

const UserTestCard = ({ cardInfoObj }: UserTestCardProps) => {
  return (
    <TestCardWrap src={cardInfoObj.src}>
      <TestCardTitle>{cardInfoObj.title}</TestCardTitle>
      <TestCardButton>시작하기</TestCardButton>
    </TestCardWrap>
  );
};

export default UserTestCard;

const TestCardWrap = styled.li<{ src: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 30px;
  position: relative;

  width: 308px;
  height: 460px;
  border-radius: 20px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: inherit;
    border-radius: 20px;
    background-image: linear-gradient(transparent 50%, #000000);
    opacity: 0.8;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 12px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const TestCardTitle = styled.strong`
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
  width: 80%;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
  color: white;
  z-index: 100;
`;

const TestCardButton = styled.button`
  width: 154px;
  height: 44px;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  z-index: 100;
`;

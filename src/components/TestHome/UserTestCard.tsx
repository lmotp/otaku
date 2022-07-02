import React from 'react';
import styled from 'styled-components';
import { IUserTestCard, IUserTestCardButtonStyle, IUserTestCardStyle } from '../../typings/TestHomeType';

interface UserTestCardProps {
  cardInfoObj: IUserTestCard;
  styleProps: IUserTestCardStyle;
  buttonStyleProps: IUserTestCardButtonStyle;
  titleSize: string;
}

interface UserTestCardStyleTypes {
  src: string;
  width: string;
  height: string;
}

interface UserTestCardButtonStyleTypes {
  buttonSize: string;
  width: string;
  height: string;
}

const UserTestCard = ({ cardInfoObj, styleProps, buttonStyleProps, titleSize }: UserTestCardProps) => {
  return (
    <TestCardWrap src={cardInfoObj.src} width={styleProps.width} height={styleProps.height}>
      <TestCardTag>#{cardInfoObj.tag}</TestCardTag>
      <TestCardTitle titleSize={titleSize}>{cardInfoObj.title}</TestCardTitle>
      <TestCardButton
        buttonSize={buttonStyleProps.buttonSize}
        width={buttonStyleProps.width}
        height={buttonStyleProps.height}
      >
        시작하기
      </TestCardButton>
    </TestCardWrap>
  );
};

export default UserTestCard;

const TestCardWrap = styled.li<UserTestCardStyleTypes>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 30px;
  position: relative;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
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

const TestCardTag = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 300;
  color: #01f5bb;
`;

const TestCardTitle = styled.strong<{ titleSize: string }>`
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
  width: 80%;
  font-size: ${(props) => props.titleSize};
  font-weight: 700;
  line-height: 1.25;
  color: white;
  z-index: 100;
`;

const TestCardButton = styled.button<UserTestCardButtonStyleTypes>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid white;
  border-radius: 10px;
  font-size: ${(props) => props.buttonSize};
  font-weight: 700;
  color: white;
  z-index: 100;
`;

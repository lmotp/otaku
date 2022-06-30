import React from 'react';
import styled from 'styled-components';
import { MyTestCardType } from '../../pages/TestHome';

interface MyTestCardProps {
  cardInfoObj: MyTestCardType;
}

const MyTestCard = ({ cardInfoObj }: MyTestCardProps) => {
  return (
    <MyTestCardWrap src={cardInfoObj.src}>
      <CardMakeDay>{cardInfoObj.makeDay.toLocaleString()}</CardMakeDay>
      <CardInfoWrap>
        <CardTitle>{cardInfoObj.title}</CardTitle>
        <CardInfoBottom>
          <CardView>View {cardInfoObj.view}</CardView>
          <CardTag>#{cardInfoObj.tag}</CardTag>
        </CardInfoBottom>
      </CardInfoWrap>
    </MyTestCardWrap>
  );
};

export default MyTestCard;

const MyTestCardWrap = styled.li<{ src: string }>`
  position: relative;
  width: 240px;
  height: 210px;
  border-radius: 20px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

const CardMakeDay = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 10px;
  font-weight: 200;
  color: #e8e8e8;
`;
const CardInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #141414;
`;
const CardTitle = styled.strong`
  display: inline-block;
  margin-bottom: 8px;
  width: 90%;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;

const CardInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90%;
`;
const CardView = styled.div`
  font-size: 12px;
  font-weight: 200;
  color: #ffffff;
`;
const CardTag = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #01f5bb;
`;

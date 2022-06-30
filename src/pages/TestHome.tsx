import React from 'react';
import whee1 from '../assets/imgs/whee1.jfif';
import whee2 from '../assets/imgs/whee2.jfif';
import whee3 from '../assets/imgs/whee3.jfif';
import whee4 from '../assets/imgs/whee4.jfif';
import whee5 from '../assets/imgs/whee5.jfif';
import whee6 from '../assets/imgs/whee6.jfif';
import whee7 from '../assets/imgs/whee7.jfif';
import UserTestCard from '../components/TestHome/UserTestCard';
import SubTitle from '../components/TestHome/SubTitle';
import styled from 'styled-components';
import MyTestCard from '../components/TestHome/MyTestCard';
import MakeMyTestCard from '../components/TestHome/MakeMyTestCard';

export interface UserTestCardType {
  id: number;
  src: string;
  title: string;
}

export interface MyTestCardType {
  id: number;
  src: string;
  title: string;
  view: number;
  tag: string;
  makeDay: Date;
}

const TestHome = () => {
  const mokingUserItem = [
    { id: 1, src: whee1, title: '휘인의 유튜브 영상이 아닌것은?' },
    { id: 2, src: whee2, title: '휘인의 유튜브 영상이 아닌것은?' },
    { id: 3, src: whee3, title: '휘인의 유튜브 영상이 아닌것은?' },
    { id: 4, src: whee4, title: '휘인의 유튜브 영상이 아닌것은?' },
  ];

  const mokingMyItem = [
    { id: 1, src: whee5, title: '휘인의 유튜브 영상이 아닌것은?', view: 337, makeDay: new Date(), tag: '여자아이돌' },
    { id: 2, src: whee6, title: '휘인의 유튜브 영상이 아닌것은?', view: 337, makeDay: new Date(), tag: '여자아이돌' },
    { id: 3, src: whee7, title: '휘인의 유튜브 영상이 아닌것은?', view: 337, makeDay: new Date(), tag: '여자아이돌' },
  ];

  const noneItemArray = Array(2).fill('');

  return (
    <section>
      <SubTitle title="내가 만든 테스트" marginTop="0px" />
      <MyCardWrap>
        {noneItemArray.map((_, index) => {
          return <MakeMyTestCard key={index} />;
        })}

        {mokingMyItem.map((info) => {
          return <MyTestCard key={info.id} cardInfoObj={info} />;
        })}
      </MyCardWrap>

      <SubTitle title="지금 인기있는 테스트" marginTop="40px" />
      <UserCardWrap>
        {mokingUserItem.map((info) => {
          return <UserTestCard key={info.id} cardInfoObj={info} />;
        })}
      </UserCardWrap>
    </section>
  );
};

export default TestHome;

const MyCardWrap = styled.ul`
  position: relative;
  display: flex;
  gap: 30px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, transparent 60%, #ffffff);
    pointer-events: none;
    opacity: 0.85;
    z-index: 200;
  }

  &::after {
    content: '▶';
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    padding-left: 2px;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 0 3px rgba(10, 16, 69, 0.2);
    text-align: center;
    line-height: 40px;
    color: #01f5bb;
    z-index: 201;
    cursor: pointer;
  }
`;

const UserCardWrap = styled.ul`
  display: flex;
  gap: 30px;
`;

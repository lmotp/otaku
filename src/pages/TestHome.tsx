import React, { useState } from 'react';
import whee1 from '../assets/imgs/whee1.jfif';
import whee2 from '../assets/imgs/whee2.jfif';
import whee3 from '../assets/imgs/whee3.jfif';
import whee4 from '../assets/imgs/whee4.jfif';
import whee5 from '../assets/imgs/whee5.jfif';
import whee6 from '../assets/imgs/whee6.jfif';
import whee7 from '../assets/imgs/whee7.jfif';
import UserTestCard from '../components/TestHome/UserTestCard';
import SubTitle from '../components/common/SubTitle';
import styled from 'styled-components';
import MyTestCard from '../components/TestHome/MyTestCard';
import MakeMyTestCard from '../components/TestHome/MakeMyTestCard';
import Tag from '../components/common/Tag';
import PagiNation from '../components/PagiNation/PagiNation';

const mokingHotUserItem = [
  { id: 1, src: whee1, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
  { id: 2, src: whee2, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
  { id: 3, src: whee3, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
  { id: 4, src: whee4, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
];

const mokingNowUserItem = [
  { id: 1, src: whee1, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
  { id: 2, src: whee2, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
  { id: 3, src: whee3, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
  { id: 4, src: whee4, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
  { id: 5, src: whee5, title: '휘인의 유튜브 영상이 아닌것은?', tag: '여자아이돌' },
];

const mokingMyItem = [
  { id: 1, src: whee5, title: '휘인의 유튜브 영상이 아닌것은?', view: 337, makeDay: new Date(), tag: '여자아이돌' },
  { id: 2, src: whee6, title: '휘인의 유튜브 영상이 아닌것은?', view: 337, makeDay: new Date(), tag: '여자아이돌' },
  { id: 3, src: whee7, title: '휘인의 유튜브 영상이 아닌것은?', view: 337, makeDay: new Date(), tag: '여자아이돌' },
];

const buttonTag = ['전체', '남자아이돌', '여자아이돌', '솔로가수', '배우', '작가', '기타'];

const noneItemArray = Array(2).fill('');

const TestHome = () => {
  const [actvieButton, setActiveButton] = useState<string>('전체');

  const onChangeActiveButton = (value: string) => {
    setActiveButton(value);
  };

  return (
    <section>
      <SubTitle title="내가 만든 테스트" marginBottom={20} />
      <MyCardWrap>
        {noneItemArray.map((_, index) => {
          return <MakeMyTestCard key={index} />;
        })}

        {mokingMyItem.map((info) => {
          return <MyTestCard key={info.id} cardInfoObj={info} />;
        })}
      </MyCardWrap>

      <TagWrap>
        {buttonTag.map((tag, index) => {
          return (
            <Tag
              key={index}
              buttonTag={tag}
              active={actvieButton === tag}
              onChangeActiveButton={onChangeActiveButton}
            />
          );
        })}
      </TagWrap>

      <SubTitle title="지금 인기있는 테스트" marginBottom={20} />
      <HotUserCardWrap>
        {mokingHotUserItem.map((info) => {
          return (
            <UserTestCard
              key={info.id}
              cardInfoObj={info}
              styleProps={{
                width: '308px',
                height: '460px',
              }}
              titleSize="1.5rem"
              buttonStyleProps={{ buttonSize: '16px', width: '154px', height: '44px' }}
            />
          );
        })}
      </HotUserCardWrap>

      <SubTitle title="지금 올라온 테스트" marginBottom={20} />
      <NewUserCardWrap>
        {mokingNowUserItem.map((info) => {
          return (
            <UserTestCard
              key={info.id}
              cardInfoObj={info}
              styleProps={{
                width: '240px',
                height: '380px',
              }}
              titleSize="1.313rem"
              buttonStyleProps={{ buttonSize: '14px', width: '120px', height: '36px' }}
            />
          );
        })}
      </NewUserCardWrap>

      <PagiNation />
    </section>
  );
};

export default TestHome;

const MyCardWrap = styled.ul`
  position: relative;
  display: flex;
  gap: 30px;
  margin-bottom: 50px;

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
    padding-bottom: 2px;
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

const TagWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 50px;
`;

const HotUserCardWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const NewUserCardWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

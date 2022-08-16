import React from 'react';
import styled from 'styled-components';
import UserPlayListCard from './UserPlayListCard';
import whee7 from '../../assets/imgs/whee7.jfif';

const mockingPlayList = [
  {
    thumbnail: whee7,
    title: '마마무 - 별이 빛나는 밤',
    answer: '별이 빛나는 밤',
    hint: '화사, Yellow Flower, 2018년',
    startTime: '2 : 00',
  },
];

const UserPlayList = () => {
  return (
    <Wrap>
      <CardListWrap>
        {mockingPlayList.map((info, index) => (
          <UserPlayListCard key={index} mockingPlayList={info} index={index} />
        ))}
      </CardListWrap>
    </Wrap>
  );
};

export default UserPlayList;

const Wrap = styled.div`
  padding: 20px;
  width: 100%;
  height: auto;
  border: 1px solid #304674;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 6px rgba(48, 70, 116, 0.3);
`;

const CardListWrap = styled.ul``;

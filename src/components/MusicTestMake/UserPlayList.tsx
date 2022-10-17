import React from 'react';
import styled from 'styled-components';
import UserPlayListCard from './UserPlayListCard';

const UserPlayList = ({ playList }: any) => {
  return (
    <Wrap>
      <Count>{playList.length} / 10</Count>
      <CardListWrap>
        {playList.map((info: any, index: number) => (
          <UserPlayListCard key={index} mockingPlayList={info} index={index} />
        ))}
      </CardListWrap>
    </Wrap>
  );
};

export default UserPlayList;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 28%;
  height: auto;
  border: 1px solid #304674;
  border-radius: 0 20px 20px 0;
  box-shadow: 4px 0 6px rgba(48, 70, 116, 0.3);
`;

const Count = styled.div`
  color: #304674;
`;

const CardListWrap = styled.ul`
  max-height: 780px;
  overflow-y: auto;
`;

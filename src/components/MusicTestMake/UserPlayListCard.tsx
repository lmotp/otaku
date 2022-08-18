import React from 'react';
import styled from 'styled-components';
import { IUserPlayListCard } from '../../typings/UserPlayList';

interface UserPlayListCardProps {
  mockingPlayList: IUserPlayListCard;
  index: number;
}

const UserPlayListCard = ({ mockingPlayList, index }: UserPlayListCardProps) => {
  return (
    <PlayListCard>
      <ListLeft>
        <Img src={mockingPlayList.thumbnail} />
      </ListLeft>
      <ListRight>
        <ListInfo>
          <InfoWrap>
            <Dt>Title : </Dt>
            <Dd>{mockingPlayList.title}</Dd>
          </InfoWrap>
        </ListInfo>
      </ListRight>
    </PlayListCard>
  );
};

export default UserPlayListCard;

const PlayListCard = styled.li`
  padding: 20px;
`;

const ListLeft = styled.div`
  width: 100%;
  border-radius: 6px;
`;

const Img = styled.img<{ src: string }>`
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const ListRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListInfo = styled.dl`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const InfoWrap = styled.div`
  display: flex;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Dt = styled.dt`
  font-size: 0.875rem;
  font-weight: 700;
  margin-right: 4px;
`;
const Dd = styled.dd`
  font-size: 0.875rem;
`;

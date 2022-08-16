import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MoveMenu } from '../../assets/imgs/move-menu.svg';
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
          <InfoWrap>
            <Dt>Answer : </Dt>
            <Dd>{mockingPlayList.answer}</Dd>
          </InfoWrap>
          <InfoWrap>
            <Dt>Hint : </Dt>
            <Dd>{mockingPlayList.hint}</Dd>
          </InfoWrap>
          <InfoWrap>
            <Dt>StartTime : </Dt>
            <Dd>{mockingPlayList.startTime}</Dd>
          </InfoWrap>
        </ListInfo>
        <IconMoveMenu />
      </ListRight>
    </PlayListCard>
  );
};

export default UserPlayListCard;

const PlayListCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 2px dashed #01f5bb;
`;

const ListLeft = styled.div`
  width: 240px;
  height: 210px;
  border-radius: 20px;
`;

const Img = styled.img<{ src: string }>`
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 20px;
`;

const ListRight = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-between;
  align-items: center;
`;
const ListInfo = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 210px;
  padding: 20px 0;
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Dt = styled.dt`
  font-weight: 700;
`;
const Dd = styled.dd``;

const IconMoveMenu = styled(MoveMenu)`
  cursor: move;
`;

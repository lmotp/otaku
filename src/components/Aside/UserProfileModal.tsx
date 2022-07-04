import React from 'react';
import styled from 'styled-components';
import { IUserClass, IUserInfo } from '../../typings/Aside';

interface UserMockingDataProps {
  userMockingData: IUserInfo;
  userClassMockingData: IUserClass[];
}

const UserProfileModal = ({ userMockingData, userClassMockingData }: UserMockingDataProps) => {
  return (
    <ModalWrap>
      <UserInfoWrap>
        <UserProfileImg src={userMockingData.profile_img} alt="프로필 이미지" />
        <div>
          <UserInfoTopWrap>
            <UserNickName>{userMockingData.nickname}</UserNickName>
            <UserLocation>{userMockingData.location}</UserLocation>
          </UserInfoTopWrap>
          <UserIntroduce>{userMockingData.introduce}</UserIntroduce>
        </div>
      </UserInfoWrap>
      <div>
        <UserGroupButton>My Group &gt; </UserGroupButton>
        <UserClassWrap>
          {userClassMockingData.map((info) => {
            return <UserClass thumbnail={info.thumbnail} key={info.id} />;
          })}
        </UserClassWrap>
      </div>
      <ButtonWrap>
        <button>Logout</button>
      </ButtonWrap>
    </ModalWrap>
  );
};

export default UserProfileModal;

const ModalWrap = styled.div`
  position: absolute;
  right: 60px;
  padding: 36px 30px;
  width: 520px;

  border: 1px solid #01f5bb;
  border-radius: 10px;
  background-color: #ffffff;
`;

const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 30px;
`;

const UserProfileImg = styled.img`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

const UserInfoTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
`;

const UserNickName = styled.strong`
  font-size: 1.125rem;
  font-weight: 700;
`;

const UserLocation = styled.div`
  font-size: 0.75rem;
`;

const UserIntroduce = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
`;

const UserGroupButton = styled.button`
  margin-bottom: 8px;
  font-size: 1rem;
`;

const UserClassWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const UserClass = styled.li<{ thumbnail: string }>`
  width: 105px;
  height: 90px;
  border-radius: 10px;
  background: ${(props) => `url(${props.thumbnail}) no-repeat center`};
  background-size: cover;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  width: 100%;
  text-align: right;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as User } from '../assets/imgs/user.svg';
import { ReactComponent as Heart } from '../assets/imgs/heart.svg';
import { ReactComponent as Search } from '../assets/imgs/search.svg';
import SearchInput from '../components/Aside/SearchInput';

const Aside = () => {
  const [userProfileModalState, setUserProfileModalState] = useState<boolean>(false);
  const [heartModalState, setHeartModalState] = useState<boolean>(false);
  const [searchModalState, setSearchModalState] = useState<boolean>(false);

  const onHeartModal = () => {
    setHeartModalState(!heartModalState);
    setUserProfileModalState(false);
    setSearchModalState(false);
  };

  const onSearchModal = () => {
    setSearchModalState(!searchModalState);
    setUserProfileModalState(false);
    setHeartModalState(false);
  };

  return (
    <AisdeWrap>
      <Button onClick={onSearchModal} active={searchModalState}>
        <SearchIcon fill={searchModalState ? '#ffffff' : '#01f5bb'} />
      </Button>
      <Button active={userProfileModalState}>
        <UserIcon fill={userProfileModalState ? '#ffffff' : '#01f5bb'} />
      </Button>
      <Button onClick={onHeartModal} active={heartModalState}>
        <HeartIcon fill={heartModalState ? '#ffffff' : '#01f5bb'} />
      </Button>
      {searchModalState && <SearchInput />}
    </AisdeWrap>
  );
};

export default Aside;

const AisdeWrap = styled.aside`
  position: relative;
  display: flex;
  gap: 20px;
`;

const Button = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#01f5bb' : '#ffffff')};
  z-index: 1001;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #01f5bb;
  }
`;

const HeartIcon = styled(Heart)`
  margin-top: 2px;

  transition: fill 0.2s ease-in-out;
  button:hover & {
    fill: #ffffff;
  }
`;

const SearchIcon = styled(Search)`
  transition: fill 0.2s ease-in-out;

  button:hover & {
    fill: #ffffff;
  }
`;

const UserIcon = styled(User)`
  transition: fill 0.2s ease-in-out;

  button:hover & {
    fill: #ffffff;
  }
`;

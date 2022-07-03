import React from 'react';
import styled from 'styled-components';
import { ReactComponent as User } from '../assets/imgs/user.svg';
import { ReactComponent as Heart } from '../assets/imgs/heart.svg';
import { ReactComponent as Search } from '../assets/imgs/search.svg';
import UserProfileModal from '../components/Aside/UserProfileModal';
import whee7 from '../assets/imgs/whee7.jfif';

import whee9 from '../assets/imgs/whee9.jfif';
import whee10 from '../assets/imgs/whee10.jpeg';
import whee11 from '../assets/imgs/whee11.jfif';
import whee12 from '../assets/imgs/whee12.jfif';

const userMockingData = {
  id: 1,
  profile_img: whee7,
  nickname: '관악구경찰관',
  location: '은평구',
  introduce:
    '안녕하세요 하하입니다. 가나다라마바사아차카타파 으에 으에 으에오. 말이 안되는데? 뭔가 이상한데? 그게 가능한거요???',
};

const userClassMockingData = [
  {
    id: 1,
    thumbnail: whee9,
  },
  {
    id: 2,
    thumbnail: whee10,
  },
  {
    id: 3,
    thumbnail: whee11,
  },
  {
    id: 4,
    thumbnail: whee12,
  },
];

const Aside = () => {
  return (
    <AisdeWrap>
      <UserProfileModal userMockingData={userMockingData} userClassMockingData={userClassMockingData} />
      <Button>
        <UserIcon fill="#01f5bb" />
      </Button>
      <Button>
        <HeartIcon fill="#01f5bb" />
      </Button>
      <Button>
        <SearchIcon fill="#01f5bb" />
      </Button>
    </AisdeWrap>
  );
};

export default Aside;

const AisdeWrap = styled.aside`
  position: absolute;
  top: 100px;
  right: 50px;
  z-index: 1000;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
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
  cursor: pointer;

  transition: fill 0.2s ease-in-out;
  button:hover & {
    fill: #ffffff;
  }
`;

const SearchIcon = styled(Search)`
  cursor: pointer;

  transition: fill 0.2s ease-in-out;

  button:hover & {
    fill: #ffffff;
  }
`;

const UserIcon = styled(User)`
  margin-bottom: 2px;
  cursor: pointer;

  transition: fill 0.2s ease-in-out;

  button:hover & {
    fill: #ffffff;
  }
`;

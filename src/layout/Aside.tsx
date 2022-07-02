import React from 'react';
import styled from 'styled-components';
import { ReactComponent as User } from '../assets/imgs/user.svg';
import { ReactComponent as Heart } from '../assets/imgs/heart.svg';
import { ReactComponent as Search } from '../assets/imgs/search.svg';

const Aside = () => {
  return (
    <AisdeWrap>
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

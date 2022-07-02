import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/imgs/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <Logo src={logo} />
      </h1>
      <nav>
        <ul>
          <TabList>
            <GnbTab to="/">모임</GnbTab>
          </TabList>
          <TabList>
            <GnbTab to="/test">테스트</GnbTab>
          </TabList>
          <TabList>
            <GnbTab to="/category">카테고리</GnbTab>
          </TabList>
          <TabList>
            <GnbTab to="/my-page">마이페이지</GnbTab>
          </TabList>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  margin-right: 120px;
  padding-left: 100px;
  padding-top: 100px;
  height: 100vh;
`;

const Logo = styled.img`
  margin-bottom: 100px;
`;

const TabList = styled.li`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GnbTab = styled(NavLink)`
  font-size: 1rem;
  font-weight: 500;
  color: #3c554f;

  transition: color 200ms ease-in-out;

  &[aria-current] {
    color: #01f5bb;
  }
  &:not([aria-current]):hover {
    color: #01f5bb;
  }
`;

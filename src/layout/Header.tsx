import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/imgs/logo.svg';

const HeaderContainer = styled.header``;

const Logo = styled.img``;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <Logo src={logo} />
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">모임</NavLink>
          </li>
          <li>
            <NavLink to="/">테스트</NavLink>
          </li>
          <li>
            <NavLink to="/">카테고리</NavLink>
          </li>
          <li>
            <NavLink to="/">마이페이지</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

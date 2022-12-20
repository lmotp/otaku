import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import logo from "../assets/imgs/logo.svg";
import Aside from "./Aside";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderWrap>
        <h1>
          <Logo src={logo} onClick={() => navigate("/")} />
        </h1>
        <Nav>
          <TabListWarp>
            <TabList>
              <GnbTab to="/community">모임</GnbTab>
            </TabList>
            <TabList>
              <GnbTab to="/test">테스트</GnbTab>
            </TabList>
            <TabList>
              <GnbTab to="/music">테스트(실시간)</GnbTab>
            </TabList>
            <TabList>
              <GnbTab to="/photo-card">포카찾기</GnbTab>
            </TabList>
          </TabListWarp>
        </Nav>

        <Aside />
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #eaedef;
  z-index: 9999;
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  height: 80px;
`;

const Logo = styled.img`
  width: 80%;
  cursor: pointer;
`;

const Nav = styled.nav`
  width: 100%;
`;

const TabListWarp = styled.ul`
  display: flex;
  gap: 20px;
`;

const TabList = styled.li``;

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

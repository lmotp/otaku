import React, { FC } from 'react';
import styled from 'styled-components';
import { ContainerProps } from '../typings/Container';

const MainContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1320px;
  height: 100vh;
  padding-top: 40px;
`;

const Container: FC<ContainerProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;

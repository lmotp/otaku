import React, { FC } from 'react';
import styled from 'styled-components';
import { ContainerProps } from '../typings/Container';

const Container: FC<ContainerProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;

const MainContainer = styled.main`
  padding-top: 40px;
  width: 100%;
  max-width: 1320px;
`;

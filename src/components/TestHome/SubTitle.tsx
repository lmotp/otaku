import React from 'react';
import styled from 'styled-components';
import { ISubTitle } from '../../typings/TestHomeType';

const SubTitle = ({ title }: ISubTitle) => {
  return <Title>{title}</Title>;
};

export default SubTitle;

const Title = styled.h2`
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 800;
  color: #01f5bb;
`;

import React from 'react';
import styled from 'styled-components';

import { ISubTitle } from '../../typings/Common';

const SubTitle = ({ title, marginBottom }: ISubTitle) => {
  return <Title marginBottom={marginBottom}>{title}</Title>;
};

export default SubTitle;

const Title = styled.h2<{ marginBottom: number | undefined }>`
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  font-size: 24px;
  font-weight: 700;
  color: #01f5bb;
`;

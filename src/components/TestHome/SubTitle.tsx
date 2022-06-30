import React from 'react';
import styled from 'styled-components';

interface SubTitleType {
  title: string;
  marginTop: string;
}

const SubTitle = ({ title, marginTop }: SubTitleType) => {
  return <Title marginTop={marginTop}>{title}</Title>;
};

export default SubTitle;

const Title = styled.h2<{ marginTop: string }>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 800;
  color: #01f5bb;
`;

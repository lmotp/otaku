import styled from "styled-components";
import PopularList from "./PopularList";
import SubTitle from "../SubTitle";

const PopluarMeeting = () => {
  const test = new Array(3).fill(1);

  return (
    <Popluar>
      <SubTitle title="인기 있는 모임" marginBottom={20} />
      <PopularListWrap>
        {test.map((_, index: number) => {
          return <PopularList key={index} />;
        })}
      </PopularListWrap>
    </Popluar>
  );
};

const Popluar = styled.section`
  margin-bottom: 50px;
`;

const PopularListWrap = styled.ul`
  display: flex;
  gap: 40px;
`;

export default PopluarMeeting;

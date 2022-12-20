import styled from "styled-components";
import GroupPurchaseCard from "./GroupPurchaseCard";

function GroupPurchase() {
  const test = new Array(4).fill(1);
  return (
    <GroupPurchaseWrap>
      {test.map((_, index: number) => {
        return <GroupPurchaseCard key={index} />;
      })}
    </GroupPurchaseWrap>
  );
}

const GroupPurchaseWrap = styled.ul`
  display: flex;
  gap: 32px;
`;

export default GroupPurchase;

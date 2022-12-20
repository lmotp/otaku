import styled from "styled-components";

function GroupPurchaseCard() {
  const img = "https://i.pinimg.com/550x/15/be/76/15be765d8b4402921d45fe1536115e28.jpg";
  return (
    <Card beforesrc={img}>
      <CardInfo>
        <InfoTitle>2022 마마무 싱글 분철 구함</InfoTitle>
        <InfoExplanation>적당히 신청 주세요~~ 경험 많습니다.ABCDEFGHIJKLMNOPQRSTUVWXYZ</InfoExplanation>
      </CardInfo>
      <CardMemberWrap>
        <CardMember></CardMember>
      </CardMemberWrap>
    </Card>
  );
}

const Card = styled.li<{ beforesrc: string }>`
  position: relative;
  min-width: 200px;
  max-width: 296px;
  width: 100%;
  height: 422px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(176, 179, 188, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: inherit;
    background-image: ${(props) => `url(${props.beforesrc})`};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
    filter: blur(6px);
    opacity: 0.25;
    width: 110%;
    height: 110%;
    transform: translate(-50%, -50%);
  }
`;

const CardInfo = styled.div`
  position: relative;
  padding: 16px;
  background: hsla(0, 0%, 100%, 0.5);

  &::before {
    content: "▶";
    position: absolute;
    font-size: 16px;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #6f6f6f;
  }
`;

const InfoTitle = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #242424;
`;
const InfoExplanation = styled.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6f6f6f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  max-height: 36px;
  padding-right: 36px;
`;

const CardMemberWrap = styled.ul``;
const CardMember = styled.li``;

export default GroupPurchaseCard;

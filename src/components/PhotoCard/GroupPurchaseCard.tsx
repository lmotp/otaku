import styled from "styled-components";
import Avatar, { genConfig } from "react-nice-avatar";

function GroupPurchaseCard() {
  const config = genConfig();
  const img = "https://source.unsplash.com/random/300×300";
  const test = new Array(4).fill("");

  return (
    <Card beforesrc={img}>
      <CardInfo>
        <InfoThumbnail src={img} alt="random" />
        <InfoWrap>
          <InfoTop>
            <InfoCount>
              <span>01/04</span>
            </InfoCount>
            <InfoTitle>2022 마마무 싱글 분철 구함</InfoTitle>
          </InfoTop>
          <InfoExplanation>적당히 신청 주세요~~ 경험 많습니다.ABCDEFGHIJKLMNOPQRSTUVWXYZ</InfoExplanation>
        </InfoWrap>
      </CardInfo>
      <CardMemberWrap>
        {test.map((item, index) => {
          return (
            <CardMember key={index}>
              <UserProfileImg {...config} />
              <UserInfo>
                <UserNickName>안녕하세요를레히호</UserNickName>
                <UserExplanation>보여드리겠습니다안녕하세요 한줄요약해서 보여드리겠습니다? 아닌가요?</UserExplanation>
              </UserInfo>
            </CardMember>
          );
        })}
      </CardMemberWrap>
    </Card>
  );
}

const Card = styled.li<{ beforesrc: string }>`
  position: relative;
  min-width: 200px;
  max-width: 296px;
  width: 100%;
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
    opacity: 0.2;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
`;

const CardInfo = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  padding: 16px;
  background: #ffffff80;
`;
const InfoThumbnail = styled.img`
  flex-shrink: 0;
  width: 60px;
  height: 76px;
  border-radius: 4px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 60px);
  padding-right: 10px;
`;
const InfoTop = styled.div`
  padding-top: 2px;
`;
const InfoCount = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;
const InfoTitle = styled.strong`
  display: inline-block;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #242424;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const InfoExplanation = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #6f6f6f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  max-height: 34px;
`;

const CardMemberWrap = styled.ul`
  padding: 0 16px;
  max-height: 280px;
  overflow-y: auto;
  overscroll-behavior: none;
`;
const CardMember = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #eeeeee;
`;
const UserProfileImg = styled(Avatar)`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserNickName = styled.em`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
`;
const UserExplanation = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 1.5;
  color: #6f6f6f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  max-height: 32px;
`;

export default GroupPurchaseCard;

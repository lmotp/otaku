import styled from "styled-components";
import { NavLink } from "react-router-dom";

function PopularList() {
  return (
    <List>
      <ListImgWrap to="/" beforesrc={"https://pbs.twimg.com/media/EWNj92iU4AAdPEb.jpg"}>
        <ListImg src={"https://pbs.twimg.com/media/EWNj92iU4AAdPEb.jpg"} />
      </ListImgWrap>
      <ListInfo>
        <InfoTitle>안녕하세요로를레히오</InfoTitle>
        <InfoExplanation>적당히해주세요오오오오오오오오오옹가리 파이야 파이야파파이파이파이리</InfoExplanation>
      </ListInfo>
    </List>
  );
}

const List = styled.li`
  min-width: 306px;
  max-width: 400px;
  width: 100%;
`;

const ListImgWrap = styled(NavLink)<{ beforesrc: string }>`
  position: relative;
  display: block;
  height: 180px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: rgba(176, 179, 188, 0.1);
  border: 1px solid rgba(176, 179, 188, 0.4);
  border-bottom: none;
  box-shadow: 0 2px 3px rgba(176, 179, 188, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: inherit;
    opacity: 0.15;
    background-image: ${(props) => `url(${props.beforesrc})`};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
    filter: blur(6px);
    width: 110%;
    height: 110%;
    transform: translate(-50%, -50%);
  }
`;

const ListImg = styled.img`
  height: inherit;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) scale(0.82);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const ListInfo = styled.div`
  padding: 16px 12px;
  border-radius: 0 0 12px 12px;
  border: 1px solid rgba(176, 179, 188, 0.4);
  border-top: none;
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

export default PopularList;

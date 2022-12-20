import styled from "styled-components";
import { NavLink } from "react-router-dom";

function PopularList() {
  return (
    <List>
      <ListImgWrap to="/" beforesrc={"https://pbs.twimg.com/media/EWNj92iU4AAdPEb.jpg"}>
        <ListImg src={"https://pbs.twimg.com/media/EWNj92iU4AAdPEb.jpg"} />
      </ListImgWrap>
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
  height: 242px;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(176, 179, 188, 0.1);
  border: 1px solid rgba(176, 179, 188, 0.1);

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
  top: 26px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export default PopularList;

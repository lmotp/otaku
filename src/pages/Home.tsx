import styled from "styled-components";
import PopluarMeeting from "../components/common/Popluar/PopluarMeeting";
import SubTitle from "../components/common/SubTitle";
import MyTestCard from "../components/TestHome/MyTestCard";

import whee1 from "../assets/imgs/whee1.jfif";
import whee2 from "../assets/imgs/whee2.jfif";
import whee5 from "../assets/imgs/whee5.jfif";
import whee6 from "../assets/imgs/whee6.jfif";
import whee7 from "../assets/imgs/whee7.jfif";
import GroupPurchase from "../components/PhotoCard/GroupPurchase";

const Home = () => {
  const mokingPopluarItem = [
    { id: 1, src: whee5, title: "휘인의 유튜브 영상이 아닌것은?", view: 337, makeDay: new Date(), tag: "여자아이돌" },
    { id: 2, src: whee6, title: "휘인의 유튜브 영상이 아닌것은?", view: 337, makeDay: new Date(), tag: "여자아이돌" },
    { id: 3, src: whee7, title: "휘인의 유튜브 영상이 아닌것은?", view: 337, makeDay: new Date(), tag: "여자아이돌" },
    { id: 4, src: whee2, title: "휘인의 유튜브 영상이 아닌것은?", view: 337, makeDay: new Date(), tag: "여자아이돌" },
    { id: 5, src: whee1, title: "휘인의 유튜브 영상이 아닌것은?", view: 337, makeDay: new Date(), tag: "여자아이돌" },
  ];

  return (
    <>
      <PopluarMeeting />

      <SubTitle title="지금 인기있는 테스트" marginBottom={20} />
      <PopluarTest>
        {mokingPopluarItem.map((info) => {
          return <MyTestCard key={info.id} cardInfoObj={info} />;
        })}
      </PopluarTest>

      <SubTitle title="지금 인기있는 분철" marginBottom={20} />
      <GroupPurchase />
    </>
  );
};

const PopluarTest = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
`;

export default Home;

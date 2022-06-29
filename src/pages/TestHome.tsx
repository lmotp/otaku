import React from 'react';
import UserTestCard from '../components/TestHome/UserTestCard';
import whee1 from '../assets/imgs/whee1.jfif';
import whee2 from '../assets/imgs/whee2.jfif';
import whee3 from '../assets/imgs/whee3.jfif';
import whee4 from '../assets/imgs/whee4.jfif';

export interface UserTestCardType {
  id: number;
  src: string;
  title: string;
}

const TestHome = () => {
  const mokingItem = [
    { id: 1, src: whee1, title: '휘인의 유튜브 영상이 아닌것은?' },
    { id: 2, src: whee2, title: '휘인의 유튜브 영상이 아닌것은?' },
    { id: 3, src: whee3, title: '휘인의 유튜브 영상이 아닌것은?' },
    { id: 4, src: whee4, title: '휘인의 유튜브 영상이 아닌것은?' },
  ];

  return (
    <section>
      {mokingItem.map((info) => {
        return <UserTestCard key={info.id} cardInfoObj={mokingItem} />;
      })}
    </section>
  );
};

export default TestHome;

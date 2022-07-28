import React from 'react';
import youtube from '../apis/youtube';

//유튜브API 이용해서 만들 예정
//https://github.com/boostcampwm-2021/web02-booducksound 소스 기반으로 참고해서 만들 예정
//youtube-dl로 비디오 전환

const RealTimeMusicGame = () => {
  const onSearchSubmit = async () => {
    const response = await youtube.get(`/search`);
  };

  return <form></form>;
};

export default RealTimeMusicGame;

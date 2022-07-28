import React, { useState } from 'react';
import youtube from '../apis/youtube';

//유튜브API 이용해서 만들 예정
//https://github.com/boostcampwm-2021/web02-booducksound 소스 기반으로 참고해서 만들 예정
//youtube-dl로 비디오 전환

const RealTimeMusicGame = () => {
  const [searchInput, setSearchInput] = useState('');
  const [videoItems, setVideoItems] = useState([]);

  const onSearchSubmit = async (e: any) => {
    e.preventDefault();
    const response = await youtube.get(`/search?q=${searchInput}`);
    console.log(response);

    setVideoItems(response.data.items);
  };

  return (
    <form onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="재생목록에 넣을 유튜브를 검색해주세요"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </form>
  );
};

export default RealTimeMusicGame;

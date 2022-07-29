import React, { useState } from 'react';
import styled from 'styled-components';
import youtube from '../apis/youtube';
import NotYoutbeCard from '../components/MusicTestMake/NotYoutbeCard';
import YoutubeCard from '../components/MusicTestMake/YoutubeCard';

//유튜브API 이용해서 만들 예정
//https://github.com/boostcampwm-2021/web02-booducksound 소스 기반으로 참고해서 만들 예정
//youtube-dl로 비디오 전환

const RealTimeMusicGame = () => {
  const [searchInput, setSearchInput] = useState('');
  const [videoItems, setVideoItems] = useState([]);

  const onSearchSubmit = async (e: any) => {
    e.preventDefault();
    const response = await youtube.get(`/search?q=${searchInput}&type=video&videoCategoryId=10`);
    console.log(response);

    setVideoItems(response.data.items);
  };

  return (
    <section>
      <Form onSubmit={onSearchSubmit}>
        <TextInput
          type="text"
          placeholder="Ex) 마마무 노래"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </Form>

      <ItemContainer>
        {!videoItems.length ? (
          <NotYoutbeCard />
        ) : (
          videoItems.map((item, index) => <YoutubeCard key={index} item={item} />)
        )}
      </ItemContainer>
    </section>
  );
};

export default RealTimeMusicGame;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

const TextInput = styled.input`
  padding: 10px 6px;
  width: 30%;
  border-radius: 10px;
  border: 1px solid #01f5bb;
  outline: none;
`;

const ItemContainer = styled.div``;

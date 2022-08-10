import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import mongoDb from '../apis/mongoDb';
import youtube from '../apis/youtube';
import NotYoutbeCard from '../components/MusicTestMake/NotYoutbeCard';
import YoutubeCard from '../components/MusicTestMake/YoutubeCard';

//유튜브API 이용해서 만들 예정
//https://github.com/boostcampwm-2021/web02-booducksound 소스 기반으로 참고해서 만들 예정
//youtube-dl로 비디오 전환

const RealTimeMusicGame = () => {
  const [searchInput, setSearchInput] = useState('');
  const [videoItems, setVideoItems] = useState([]);
  const [musicQuizItems, setMusicQuizItems] = useState<string[]>([]);

  const audioRef = useRef<any>(null);
  const sourceRef = useRef<any>(null);

  const onSearchSubmit = async (e: any) => {
    e.preventDefault();

    const response = await youtube.get(`/search?q=${searchInput}&type=video&videoCategoryId=10`);
    setVideoItems(response.data.items);
  };

  const onMusicQuizAdd = useCallback(
    (newQuizItem: string) => {
      setMusicQuizItems([...musicQuizItems, newQuizItem]);
    },
    [musicQuizItems],
  );

  const onMusicQuiz = async () => {
    await mongoDb.post('/quiz/music/make', { musicQuizItems }).then(({ data }) => {
      sourceRef.current.src = data;
    });

    audioRef.current.load();

    const playPromise = audioRef.current.play();

    playPromise.then(() => {
      audioRef.current?.play();
    });
  };

  return (
    <section>
      <button onClick={onMusicQuiz}>보내기</button>

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
          <CardWrap>
            {videoItems.map((item, index) => (
              <YoutubeCard key={index} item={item} onMusicQuizAdd={onMusicQuizAdd} />
            ))}
          </CardWrap>
        )}
      </ItemContainer>

      <audio ref={audioRef} controls>
        <source ref={sourceRef} />
      </audio>
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

const CardWrap = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

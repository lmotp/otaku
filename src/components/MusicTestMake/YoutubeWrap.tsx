import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import mongoDb from '../../apis/mongoDb';
import youtube from '../../apis/youtube';
import YoutubeCard from './YoutubeCard';

const YoutubeWrap = () => {
  const [searchInput, setSearchInput] = useState('');
  const [videoItems, setVideoItems] = useState([]);
  const [musicQuizItems, setMusicQuizItems] = useState<any>([]);

  const audioRef = useRef<any>(null);
  const sourceRef = useRef<any>(null);

  const onSearchSubmit = async (e: any) => {
    e.preventDefault();

    const response = await youtube.get(`/search?q=${searchInput}&type=video&videoCategoryId=10`);
    setVideoItems(response.data.items);
  };

  const onMusicQuizAdd = useCallback(
    (newQuizItem: string) => {
      if (musicQuizItems.includes(newQuizItem)) {
        return setMusicQuizItems(musicQuizItems.filter((videoId: string) => videoId !== newQuizItem));
      }

      setMusicQuizItems([...musicQuizItems, newQuizItem]);
    },
    [musicQuizItems],
  );

  // const onMusicQuiz = async () => {
  //   await mongoDb.post('/quiz/music/make', { musicQuizItems }).then(({ data }) => {
  //     sourceRef.current.src = data;
  //   });

  //   audioRef.current.load();

  //   const playPromise = audioRef.current.play();

  //   playPromise.then(() => {
  //     audioRef.current?.play();
  //   });
  // };

  return (
    <Wrap>
      <Form onSubmit={onSearchSubmit} videoItemsLength={videoItems.length}>
        <TextInput
          type="text"
          placeholder="Ex) 마마무 노래"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </Form>

      {videoItems.length > 0 && (
        <CardWrap>
          {videoItems.map((item, index) => (
            <YoutubeCard key={index} item={item} onMusicQuizAdd={onMusicQuizAdd} />
          ))}
        </CardWrap>
      )}
    </Wrap>
  );
};

export default YoutubeWrap;

const Form = styled.form<{ videoItemsLength: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${(props) => (props.videoItemsLength ? '30px' : '0')};
  width: 100%;
  height: ${(props) => (props.videoItemsLength ? 'auto' : '80px')};
`;

const TextInput = styled.input`
  padding: 10px 6px;
  width: 30%;
  border-radius: 10px;
  border: 1px solid #01f5bb;
  outline: none;
`;

const Wrap = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  height: auto;
  border: 1px solid #304674;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -2px 6px rgba(48, 70, 116, 0.3);
`;

const CardWrap = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

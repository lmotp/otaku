import { decode } from 'html-entities';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMusicQuizInfo } from '../../typings/MusicTestMake';

const YoutubeCard = ({ item, onMusicQuizAdd }: IMusicQuizInfo) => {
  const [videoTitle, setVideoTitle] = useState<string | undefined>();
  useEffect(() => {
    setVideoTitle(decode(item.snippet.title, { level: 'html5' }));
  }, [item.snippet.title]);

  return (
    <Card onClick={() => onMusicQuizAdd(item.id.videoId)}>
      <Img src={item.snippet.thumbnails.high.url}></Img>
      <div>
        <Title>{videoTitle}</Title>
      </div>
    </Card>
  );
};

export default YoutubeCard;

const Card = styled.li`
  width: calc(25% - 7.5px);
  height: 300px;
  border-radius: 4px;
  cursor: pointer;
`;

const Img = styled.img<{ src: string }>`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.strong`
  font-weight: bold;
`;

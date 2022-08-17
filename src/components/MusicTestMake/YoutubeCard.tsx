import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { decode } from 'html-entities';
import { IMusicQuizInfo } from '../../typings/MusicTestMake';

const YoutubeCard = ({ item, onMusicQuizAdd }: IMusicQuizInfo) => {
  const [videoTitle, setVideoTitle] = useState<string | undefined>();
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    setVideoTitle(decode(item.snippet.title, { level: 'html5' }));
  }, [item.snippet.title]);

  const onClick = () => {
    onMusicQuizAdd(item.id.videoId);
    setCheck(!check);
  };

  return (
    <Card onClick={onClick}>
      <Img src={item.snippet.thumbnails.medium.url}></Img>
      <div>
        <InfoTopWrap>
          <ChannelTitle>{item.snippet.channelTitle}</ChannelTitle>
          <CheckItemButton checkState={check} />
        </InfoTopWrap>
        <Title>{videoTitle}</Title>
      </div>
    </Card>
  );
};

export default YoutubeCard;

const jelly = keyframes`
  0% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const Card = styled.li`
  margin-bottom: 20px;
  width: calc(25% - 15px);
  border-radius: 4px;
  cursor: pointer;
`;

const Img = styled.img<{ src: string }>`
  display: block;
  margin-bottom: 10px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const InfoTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 6px 6px 0;
  width: 100%;
  border-bottom: 1px solid black;
`;

const ChannelTitle = styled.div`
  width: 80%;
  font-size: 0.875rem;
  line-height: 1.5;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CheckItemButton = styled.button<{ checkState: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #304674;
  animation: ${(props) => props.checkState && `${jelly} 0.6s ease`};
`;

const Title = styled.strong`
  display: -webkit-box;
  height: 50px;
  line-height: 1.5;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

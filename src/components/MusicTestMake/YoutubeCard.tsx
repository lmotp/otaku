import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
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
        <Title>{videoTitle}</Title>
        <InfoTopWrap>
          <ChannelTitle>{item.snippet.channelTitle}</ChannelTitle>
          <CheckItemButton checkState={check} />
        </InfoTopWrap>
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
  margin-bottom: 10px;
  width: calc(33% - 6px);
  border-radius: 4px;
  cursor: pointer;
`;

const Img = styled.img<{ src: string }>`
  display: block;
  margin-bottom: 6px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const InfoTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding-right: 6px;
  width: 100%;
`;

const ChannelTitle = styled.div`
  width: 90%;
  font-size: 0.75rem;
  line-height: 1.5;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CheckItemButton = styled.button<{ checkState: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #01f5bb;
  transition: background-color 0.1s ease;

  &::after {
    content: '';
    position: absolute;
    display: block;
    margin-bottom: 2px;
    width: 3px;
    height: 6px;
    opacity: 0;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;

    transform: rotate(45deg) scale(0);
    transition: opacity 0.3s ease 0.15s, transform 0.3s ease 0.15s;
  }

  ${(props) =>
    props.checkState &&
    css`
      background-color: #01f5bb;
      border-color: #01f5bb;
      animation: ${jelly} 0.6s ease;

      &::after {
        opacity: 1;
        transform: rotate(45deg) scale(1);
      }
    `}
`;

const Title = styled.strong`
  display: -webkit-box;
  margin-bottom: 6px;
  height: 42px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

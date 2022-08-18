import React, { useState } from 'react';
import styled from 'styled-components';
import UserPlayList from '../components/MusicTestMake/UserPlayList';

import YoutubeWrap from '../components/MusicTestMake/YoutubeWrap';

const RealTimeMusicGame = () => {
  const [playList, setPlayList] = useState<[]>([]);

  return (
    <Wrap>
      <YoutubeWrap setPlayList={setPlayList} />
      <UserPlayList playList={playList} />
    </Wrap>
  );
};

export default RealTimeMusicGame;

const Wrap = styled.section`
  display: flex;
  justify-content: space-between;
`;

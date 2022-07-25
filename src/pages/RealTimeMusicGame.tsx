import axios from 'axios';
import React, { useEffect } from 'react';

const RealTimeMusicGame = () => {
  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10')
      .then((res) => console.log(res.data));
  }, []);

  return <div>RealTimeMusicGame</div>;
};

export default RealTimeMusicGame;

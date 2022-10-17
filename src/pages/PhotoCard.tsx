import React from 'react';
import SubTitle from '../components/common/SubTitle';
import MyPhotoCard from '../components/PhotoCard/MyPhotoCard';

const PhotoCard = () => {
  return (
    <section>
      <SubTitle title="내 교환현황" marginBottom={20} />
      <MyPhotoCard />
    </section>
  );
};

export default PhotoCard;

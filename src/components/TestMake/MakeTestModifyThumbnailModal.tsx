import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import whee5 from '../../assets/imgs/whee5.jfif';

const MakeTestModifyThumbnailModal = () => {
  const [mainImg, setMainImg] = useState('');
  const [imgFile, setImgFile] = useState('');

  const onChangeThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
    const { files }: any = e.target;
    let theFile = files[0];

    console.log(files);

    const reader = new FileReader();
    reader.onloadend = (e: any) => {
      setMainImg(e.target.result);
      setImgFile(theFile);
    };

    reader.readAsDataURL(theFile);
  };

  return (
    <div>
      <Input id="thumbnail" type="file" accept="image/png, image/jpeg" onChange={onChangeThumbnail} />
      <MyTestCardWrap htmlFor="thumbnail" src={whee5}></MyTestCardWrap>
    </div>
  );
};

export default MakeTestModifyThumbnailModal;

const Input = styled.input`
  display: none;
`;

const MyTestCardWrap = styled.label<{ src: string }>`
  position: relative;
  display: inline-block;
  width: 240px;
  height: 210px;
  border-radius: 20px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

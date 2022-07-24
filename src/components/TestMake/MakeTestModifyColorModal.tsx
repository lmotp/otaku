import React, { useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

const MakeTestModifyColorModal = () => {
  const [color, setColor] = useState('#aabbcc');

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInputStyle color={color} onChange={setColor} />
    </div>
  );
};

export default MakeTestModifyColorModal;

const HexColorInputStyle = styled(HexColorInput)`
  display: block;
  box-sizing: border-box;
  width: 90px;
  margin: 20px 55px 0;
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #eee;
  outline: none;
  font: inherit;
  text-transform: uppercase;
  text-align: center;

  &:focus {
    border-color: #4298ef;
  }
`;

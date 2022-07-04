import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const inputRef = useRef(null);

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue('');
  };

  return (
    <Form onSubmit={onSearchSubmit}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchValue}
        onChange={onChangeSearchValue}
      />
    </Form>
  );
};

export default SearchInput;

const Form = styled.form`
  position: absolute;
  right: 60px;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding-left: 14px;
  width: 300px;
  height: 50px;
  border: 5px solid #01f5bb;
  border-radius: 16px;
  outline: none;
  color: #01f5bb;
  background-color: #ffffff;
`;

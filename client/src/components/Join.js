import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  opacity: 0.8;
  text-decoration: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  &:hover, &:focus {
    opacity: 1;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const StyledLink = styled(Link)`
  border: none;
  border-radius: 4px;
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  opacity: 0.8;
  text-decoration: none;
  text-align: center;
  background-color: #006d86;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <JoinWrapper>
      <Input
        placeholder="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Room"
        type="text"
        onChange={(e) => setRoom(e.target.value)}
      />
      <StyledLink
        onClick={(e) => ((!name || !room) ? e.preventDefault() : null) }
        to={`/chat?name=${name}&room=${room}`}
      >
        Sign In
      </StyledLink>
    </JoinWrapper>
  );
};

export default Join;

import React from 'react';
import styled from 'styled-components';

const Input = styled.textarea`
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 0.5rem;
  opacity: 0.8;
  text-decoration: none;

  &:hover, &:focus {
    opacity: 1;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;

  button {
    all: unset;
    opacity: 0.8;
    color:#268bd2; 
    border: none;
    background-color: transparent;
    padding: 0 0 0 0.5rem;;
    
    &:hover {
      cursor: pointer;
      opacity: 1;
    }

  }
`;

const MessageBox = ({ message, setMessage, sendMessage }) => (
  <StyledForm>
    <Input
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <button onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </StyledForm>
);

export default MessageBox;

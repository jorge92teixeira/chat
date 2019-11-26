import React from 'react';
import ReactEmoji from 'react-emoji';

import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  padding-right: 0.5rem;

  .username {
    font-size: 0.7rem;
    color: #404040;
  }
`;

const MessageBox = styled.div`
  background: ${(props) => props.background};
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: #f4f4f4;
  display: inline-block;
  max-width: 80%;
  min-width: 30%;
  word-wrap: break-word;
`;

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) isSentByCurrentUser = true;

  return (
    isSentByCurrentUser
      ? (
        <MessageContainer justify="flex-end">
          <MessageBox background="#99badd">
            <p>{ReactEmoji.emojify(text)}</p>
          </MessageBox>
        </MessageContainer>
      )
      : (
        <MessageContainer justify="flex-start">
          <MessageBox background="#86BB71">
            <span className="username">{user}</span>
            <p>{ReactEmoji.emojify(text)}</p>
          </MessageBox>
        </MessageContainer>
      )
  );
};

export default Message;

import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import styled from 'styled-components';

import MessageBox from './MessageBox';
import Messages from './Messages';
import UserList from './UserList';

let socket;

const ChatContainer = styled.div`
  border-radius: 0.5rem;
  background: #444753;
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: 80vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const MessagesContainer = styled.div`
  background: #F2F5F8;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
  padding: 1rem;

`;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState('');
  const ENDPOINT = '/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT, { path: '/chat-io/socket.io' });
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) alert(error);
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) socket.emit('sendMessage', message, () => setMessage(''));
  };

  return (
    <ChatContainer>
      <UserList
        users={users}
        room={room}
      />
      <MessagesContainer>
        <Messages messages={messages} name={name} />
        <MessageBox
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </MessagesContainer>
    </ChatContainer>
  );
};

export default Chat;

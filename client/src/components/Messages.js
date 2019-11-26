import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

import Message from './Message';

const ScrollToBottomStyled = styled(ScrollToBottom)`
  overflow: auto;
  flex: auto;
`;

const Messages = ({ messages, name }) => (
  <ScrollToBottomStyled>
    {
      messages.map((m, i) => (
        <div key={i}>
          <Message message={m} name={name} />
        </div>
      ))
    }
  </ScrollToBottomStyled>
);

export default Messages;

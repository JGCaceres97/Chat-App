import React from 'react';
import Message from './Message';
// @ts-ignore
import ScrollToButton from 'react-scroll-to-bottom';
import { IMessagesProps } from '../interfaces/IMessages';

import '../styles/Messages.scss';

function Messages({ messages, name }: IMessagesProps) {
  return (
    <ScrollToButton className='messages'>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToButton>
  );
}

export default Messages;

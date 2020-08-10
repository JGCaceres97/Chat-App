import React from 'react';
// @ts-ignore
import ReactEmoji from 'react-emoji';
import { IMessageProps } from '../interfaces/IMessages';

import '../styles/Message.scss';

function Message({ message: { user, text }, name }: IMessageProps) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div className={`messageContainer ${isSentByCurrentUser ? 'justifyEnd' : 'justifyStart'}`}>
      {isSentByCurrentUser && <p className='sentText marginP pr-10'>{trimmedName}</p>}
      <div className={`messageBox ${isSentByCurrentUser ? 'backgroundBlue' : 'backgroundLight'}`}>
        <p className={`messageText marginP ${isSentByCurrentUser ? 'colorWhite' : 'colorDark'}`}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      {!isSentByCurrentUser && <p className='sentText marginP pl-10'>{user}</p>}
    </div>
  );
}

export default Message;

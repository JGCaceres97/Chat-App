import React from 'react';
import { IInput } from '../interfaces/IInput';

import '../styles/Input.scss';

function Input({ message, setMessage, handleEnter, sendMessage }: IInput) {
  return (
    <form className='form'>
      <input
        autoFocus
        type='text'
        value={message}
        className='input'
        onKeyPress={handleEnter}
        placeholder='Type a message...'
        onChange={e => setMessage(e.target.value)}
      />
      <button className='sendButton' onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}

export default Input;

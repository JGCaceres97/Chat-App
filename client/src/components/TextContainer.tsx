import React from 'react';
import { ITextContainer } from '../interfaces/ITextContainer';
import '../styles/TextContainer.scss';

import onlineIcon from '../icons/onlineIcon.png';

function TextContainer({ users }: ITextContainer) {
  return (
    <div className='textContainer'>
      <div className='info'>
        <h1>
          Realtime Chat Application{' '}
          <span role='img' aria-label='emoji'>
            💬
          </span>
        </h1>
        <h3>Created with React, Express, Node and Socket.IO</h3>
        <h3>
          Try it out right now!{' '}
          <span role='img' aria-label='emoji'>
            ⬅️
          </span>
        </h3>
      </div>
      {users && (
        <div>
          <h2>People currently chatting:</h2>
          <div className='activeContainer'>
            <h3>
              {users.map(({ name }) => (
                <div key={name} className='activeItem'>
                  {name}
                  <img src={onlineIcon} alt='Online icon' />
                </div>
              ))}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextContainer;

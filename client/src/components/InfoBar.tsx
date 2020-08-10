import React from 'react';
import { IInfoBar } from '../interfaces/IInfoBar';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';
import '../styles/InfoBar.scss';

function InfoBar({ room }: IInfoBar) {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='Online icon' />
        <h3>{room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={closeIcon} alt='Close icon' />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TInputChange, TSubmitClick } from '../interfaces/IJoin';
import '../styles/Join.scss';

function Join() {
  const initialInputs = { name: '', room: '' };
  const [inputs, setInputs] = useState(initialInputs);

  const handleInputChange = (e: TInputChange) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmitClick = (e: TSubmitClick) => {
    const { name, room } = inputs;

    if (!name || !room) {
      e.preventDefault();
      alert('Name and room are required.');
    }
  };

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <form>
          <input
            required
            autoFocus
            type='text'
            name='name'
            maxLength={50}
            className='joinInput'
            onChange={handleInputChange}
            placeholder='Enter your name'
          />
          <input
            required
            type='text'
            name='room'
            maxLength={50}
            placeholder='Enter room'
            className='joinInput mt-20'
            onChange={handleInputChange}
          />
          <Link onClick={handleSubmitClick} to={`/chat?name=${inputs.name}&room=${inputs.room}`}>
            <button className='button mt-20' type='submit'>
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Join;

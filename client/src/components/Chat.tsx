import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ENDPOINT } from '../config/config';
import { IChat, IRoomData, IUser, THandleEnter, TSendMessage } from '../interfaces/IChat';
import { IMessage } from '../interfaces/IMessages';
import '../styles/Chat.scss';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import TextContainer from './TextContainer';

let socket: SocketIOClient.Socket;

function Chat({ location }: IChat) {
  const initialUser: IUser[] = [{ id: '', name: '', room: '' }];

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState<IUser[]>(initialUser);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    if (name && room) {
      setName(name.toString());
      setRoom(room.toString());
    }

    socket.emit('join', { name, room }, (error: string | undefined) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');

      // @ts-ignore
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message: IMessage) => {
      setMessages(messages => [...messages, message]);
    });

    socket.on('roomData', ({ users }: IRoomData) => {
      setUsers(users);
    });
  }, []);

  const handleEnter = (e: THandleEnter) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  const sendMessage = (e: TSendMessage) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          handleEnter={handleEnter}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;

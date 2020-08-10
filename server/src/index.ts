import express from 'express';
import { createServer } from 'http';
import socketio from 'socket.io';
import router from './router';
import cors from 'cors';

import { addUser, removeUser, getUser, getUsersInRoom } from './users';

const PORT = process.env.PORT || 4000;

const app = express();
const server = createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return cb(error);

    if (user) {
      socket.emit('message', {
        user: 'Admin',
        text: `${user.name}, welcome to the room ${user.room}`
      });
      socket.broadcast
        .to(user.room)
        .emit('message', { user: 'Admin', text: `${user.name} has joined!` });
      socket.join(user.room);

      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

      cb();
    }
  });

  socket.on('sendMessage', (message, cb) => {
    const user = getUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: user.name, text: message });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

      cb();
    }
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
    }
  });
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log('Server running on port', PORT));

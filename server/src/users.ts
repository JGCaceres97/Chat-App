interface IUser {
  id: string;
  name: string;
  room: string;
}

const users: IUser[] = [];

function addUser({ id, name, room }: IUser) {
  if (!name || !room) {
    return { error: 'Username and room are required fields' };
  }

  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(user => user.name === name && user.room === room);

  if (existingUser) {
    return { error: 'Username is taken' };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
}

function removeUser(id: string) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getUser(id: string) {
  return users.find(user => user.id === id);
}

function getUsersInRoom(room: string) {
  return users.filter(user => user.room === room);
}

export { addUser, removeUser, getUser, getUsersInRoom };

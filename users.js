const users = [];

const addUser = ({ id, name, room, peerId }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: 'Username is taken' };
  }
  const user = { id, name, room, peerId };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

const getPeersInRoom = (room) =>
  users.filter((user) => user.room === room).map((user) => user.peer);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  getPeersInRoom,
};

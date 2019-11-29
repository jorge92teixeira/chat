const users = [];

const addUser = ({ id, name, room }) => {
  const newName = name.trim().toLowerCase();
  const newRoom = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === newRoom && user.name === newName);
  if (!newName || !newRoom) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'Username is taken' };

  const user = { id, name: newName, room: newRoom };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
  return null;
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

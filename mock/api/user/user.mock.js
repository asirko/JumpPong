
const users = [
  {
    id: 0,
    login: 'test',
    password: ''
  }
];

exports.getUserByLogin = function (login, password) {
  const foundUser = users.find(user => user.login === login);
  if (foundUser && foundUser.password === password) {
    return cloneWithoutPassword(foundUser);
  } else {
    return null;
  }
};

exports.getUserByToken = function (token) {
  return cloneWithoutPassword(users.find(user => user.token === token));
};

exports.updateUserById = function (id, user) {
  users[id] = Object.assign(users[id], user);
};

exports.addUser = function (user) {
  const storedUser = Object.assign({id: users.length}, user);
  users.push(storedUser);
  return cloneWithoutPassword(storedUser);
};

function cloneWithoutPassword(user) {
  const newUser = Object.assign({}, user);
  delete newUser.password;
  return newUser;
}

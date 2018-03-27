const userStorage = require('./user.mock');

exports.getUser = function(req, res) {
  console.log('get User: ', req.body.login);
  const user = userStorage.getUserByLogin(req.body.login, req.body.password);

  if (user) {
    res.header('Authorization', `Bearer ${new Date().getTime()}`);
    res.json(user);
  } else {
    res.status(403)
      .send('Not authorized');
  }
};

exports.createUser = function (req, res) {
  const user = req.body;
  console.log(JSON.stringify(user));
  if (userStorage.getUserByLogin(user.login)) {
    res.status(409).send();
    return;
  }
  const updatedUser = userStorage.addUser(user);
  res.status(200).send(updatedUser);
};

exports.updateUser = function (req, res) {
  const id = +req.params.id;
  const user = req.body;
  userStorage.updateUserById(id, user);
  res.send(user);
};

exports.refreshUser = function(req, res) {
  console.log(req.header('Authorization'));
  const authorization = req.header('Authorization') || '';
  const token = /^Bearer (.+)$/.exec(authorization)[1];
  const user = userStorage.getUserByToken(token);

  if (user) {
    res.json(user);
  } else {
    res.status(404)
      .send('Not found');
  }
};

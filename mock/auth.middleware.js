
const TOKEN_VALIDITY_IN_MINUTES = 30;
const BEARER = 'Bearer ';

exports.test = (req, res, next) => {

  // make sure user is allowed to that route (white listed)
  const authorization = req.header('authorization');
  const isAuthorizationValid = authorizationIsValid(authorization);
  if (!isWhiteList(req) && !isAuthorizationValid) {
    res.status(401).send();
    return;
  }

  const simpleSend = res.send;
  res.send = function (json) {
    if (isAuthorizationValid) {
      res.header('Authorization', `Bearer ${new Date().getTime()}`);
    }

    simpleSend.apply(res, [json]);
  };
  next();
};

function authorizationIsValid(authorization) {
  return authorization
    && new RegExp(`^${BEARER} .+$`).test(authorization)
    && tokenIsValid(authorization.replace(BEARER, ''));
}

function tokenIsValid(token) {
  const dateTime = +token;
  const msNow = new Date().getTime();
  const msSinceToken = msNow - dateTime;
  return msSinceToken < TOKEN_VALIDITY_IN_MINUTES * 60 * 1000;
}

function isWhiteList (req) {
  const whiteList = [
    'POST /users/login',
  ];

  console.log(req.method, req.url);

  return whiteList.map(w => w.split(' '))
    .map(([method, url]) => req.method === method && req.url === url)
    .reduce((hasOneTrue, currentBoolean) => hasOneTrue || currentBoolean, false);
}

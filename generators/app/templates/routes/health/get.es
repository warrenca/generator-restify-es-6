module.exports = (server) => {
  server.get(`${_config.namespace}/health`, (req, res, next) => {
    res.send(200, { status: true });
    return next();
  });
};


module.exports = (server) => {
  server.get(`${_config.namespace}/hello/:name`, (req, res, next) => {
    var NameAdaptor = _locator.get("NameFinderAdaptor");
    var someConfig = {};
    var someOptions = {};

    var nameAdaptor = new NameAdaptor(someConfig, someOptions);
    var message = `Hello trainer ${req.params.name.toUpperCase()},
I am Professor ${nameAdaptor.random()}.
You are in the ${process.env.REALM.toUpperCase()} world!`;
    res.send(200, {message:message});

    return next();
  });
};

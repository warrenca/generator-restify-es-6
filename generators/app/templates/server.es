/* global appEmitter */

import bunyan from "bunyan";
import consign from "consign";
import restify from "restify";
import errors from "restify-errors";

var bunyanLogger = bunyan.createLogger({
  name: 'appLogger',
  serializers: {
    err: bunyan.stdSerializers.err
  }
});
var port = process.env.PORT || '3000';
var server = restify.createServer();

global.errors = errors;

server.use(restify.acceptParser(server.acceptable));
server.use(restify.gzipResponse());
server.use(restify.queryParser());
server.use(restify.bodyParser());

consign()
  .include("bootstrap/init.es")
  .include("bootstrap/locator.es")
  .include("routes")
  .into(server);

appEmitter.on("init:done", () => {
  console.log("App initialization done!");
});

server.once('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('port is currently in use');
  }
});

server.listen(port, () => {
  console.log('%s listening at %s/%s', server.name, server.url, _config.namespace);
});

server.on('uncaughtException', (req, res, err, appError) => {
  bunyanLogger.info(appError);

  return res.send(new errors.InternalServerError(appError.message));
});

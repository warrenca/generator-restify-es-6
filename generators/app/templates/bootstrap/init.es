import fs from "fs";
import async from "async";
import _ from "underscore";
import dotenv from "dotenv";
import EventEmitter from "events";

class AppEmitter extends EventEmitter {}
const appEmitter = new AppEmitter();

global.getEnv = () => {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV;
  }
  return 'local';
};

global.appEmitter = appEmitter;

console.info(`Current environment: ${getEnv()}`);

async.series([
  /* Check environments */
  (callback) => {
    var envs = dotenv.config({path: './.env.sample'});
    var missingEnvs = [];
    for (var env in envs) {
      if (process.env[env] === "XXXXXX") {
        missingEnvs.push(env);
      }
    }

    if (missingEnvs.length>0) return callback(`Missing Envs: ${missingEnvs.join(', ')}`);

    console.log("Checking environments: complete");
    return callback(null);
  },

  /* Initialize config */
  (callback) => {
    var commonConfig = JSON.parse(fs.readFileSync('./config/common.api.json', 'utf8'));
    var envConfig = {};
    var envConfigPath = './config/'+getEnv()+'.api.json';

    try {
      fs.accessSync(envConfigPath, fs.F_OK);
      envConfig = JSON.parse(fs.readFileSync(envConfigPath, 'utf8'));
    } catch (e) {}

    envConfig = _.extend(commonConfig, envConfig);

    global._config = envConfig;
    console.info("Initialize config: Done");
    console.info("Loaded Configs:");
    console.log(JSON.stringify(envConfig));
    return callback(null);
  }
],

/* Async callback, runs after everything is done */
(err, results) => {
    if (err) return console.error('Initialize Errors: ' + err);

    /* No inialize errors */
    appEmitter.emit('init:done');
});

import serviceList from "../services/serviceList.es";
import serviceLocator from "node-service-locator";
import path from "path";

var basePath = path.resolve(__dirname, '..');
serviceLocator.init(serviceList, basePath);

global._locator = serviceLocator;

// Utils to get data from memory

//import request from "superagent";
//import { assign } from "lodash";

import config from "../config";

const debug = require("debug")("isomorphic500");

const InMemoryStorage = {
  products: [{
    name: 'Product Number #1',
    category: 'test'
  }, {
    name: 'Amazing Hoolahoop',
    category: 'Fitness'
  }]
};

const InMemUtils = {

  get(type, done) {

    debug("Retrieving %s from memory", type);

    done(null, InMemoryStorage[type]);
  }

};

export default InMemUtils;

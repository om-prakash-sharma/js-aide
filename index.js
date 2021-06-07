'use strict'

const ArrayUtils = require('./lib/array');
const StringUtils = require('./lib/string');

class JsHelper {

    constructor() {
    }

    initialize() {
        ArrayUtils();
        StringUtils();
    }

}

module.exports = new JsHelper();
/**
 * Created by Exper1ence on 2016/12/13.
 */
const _ = require('lodash');

class NError {
    constructor(code, value) {
        this.code = code;
        this.value = value;
    }
}
const namespaceObject = {};
function n() {
    const cb = Array.prototype.pop.call(arguments);
    const wants = Array.prototype.map.call(arguments, (want) => {
        return namespaceObject[want];
    });
    return cb.apply(null, wants);
}

n.register = (obj) => {
    if (!_.isPlainObject(obj))throw new TypeError('the first argument must be a plain object');
    try {
        _.forOwn(obj, (value, key) => {
            if (namespaceObject[key])throw new NError(100, key);
            namespaceObject[key] = value;
        });
    }
    catch (e) {
        if (e instanceof NError) {
            if (e.code == 100)throw new Error(`the key '${e.value}' has already be registered.`);
        }
        else throw e;
    }
};

module.exports = n;
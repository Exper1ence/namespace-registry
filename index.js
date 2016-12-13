/**
 * Created by Exper1ence on 2016/12/13.
 */
const _ = require('lodash');

const namespaceObject = {};
const n = function () {
    const cb = Array.prototype.pop.call(arguments);
    const wants = Array.prototype.map.call(arguments, (want) => {
        return namespaceObject[want];
    });
    return cb.apply(null, wants);
};

n.register = (obj) => {
    if (!_.isPlainObject(obj))throw new TypeError('the first argument must be a plain object');
    try {
        _.forOwn(obj, (value, key) => {
            if (namespaceObject[key])throw 100;
            namespaceObject[key] = value;
        });
    }
    catch (e) {
        if (e == 100)throw new Error(`the key '${key}' has already be registered.`);
    }
};

module.exports = n;
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
    _.forOwn(obj, (value, key) => {
        if (namespaceObject[key])throw new Error(`the key '${key}' has already be registered.`);
        namespaceObject[key] = value;
    });
};

module.exports = n;
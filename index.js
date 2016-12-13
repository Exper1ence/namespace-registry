/**
 * Created by Exper1ence on 2016/12/13.
 */
const _ = require('lodash');
const namespaceObject = {};

module.exports = {
    register(obj){
        if (_.isPlainObject(obj)) {
            _.forOwn(obj, (value, key) => {
                if (namespaceObject[key])throw new Error(`the key '${key}' has already be registered.`);
                namespaceObject[key] = value;
            })
        }
    },
    using(){
        const cb = Array.prototype.pop.call(arguments);
        const wants = Array.prototype.map.call(arguments, (want) => {
            return namespaceObject[want];
        });
        return cb.apply(null, wants);
    }
};
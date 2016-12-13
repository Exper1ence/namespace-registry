# namespace-registry
A javascript library to implement namespacing.

usage:

const namespace = require('namespace-registry');

namespace.register('test', {a: 1, b: 2});

module.exports = namespace.using('ok', ({a, b}) => {
    console.log(a);
    console.log(b);
    return {a,b};
});

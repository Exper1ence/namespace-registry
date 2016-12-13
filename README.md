# namespace-registry

namespace-registry is a javascript module provides namespacing.

# REQUIREMENT

###*ES6*

# USAGE

```javascript
    global.n = global.n || require('namespace-registry');
    
    n.register({
        test: {a: 1},
        ok: {b: 2, c: 'this is c'},
    });
    
    module.exports = n('test', 'ok', ({a}, {b, c}) => {
        console.log(a);
        console.log(b);
        console.log(c);
        return {a, b, c};
    });
```

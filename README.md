
# SYNOPSIS

namespace-registry is a javascript module provides namespacing.

# REQUIRE

###*ES6*

# USAGE

```javascript
    global.n = require('namespace-registry');
    
    namespace.register({
        test: {a: 1},
        ok: {b: 2, c: 'this is c'},
    });
    
    module.exports = namespace.using('test', 'ok', ({a}, {b, c}) => {
        console.log(a);
        console.log(b);
        console.log(c);
        return {a, b, c};
    });
```

[![Codeship](https://img.shields.io/codeship/3ad58940-4c7d-0131-15d5-5a8cd3f550f8.svg?maxAge=2592000)]()
[![NPM version](https://badge.fury.io/js/eventemitter2.svg)](http://badge.fury.io/js/eventemitter2)
[![Dependency Status](https://img.shields.io/david/asynclyeventemitter2.svg)](https://david-dm.org/asynclyeventemitter2)
[![npm](https://img.shields.io/npm/dm/eventemitter2.svg?maxAge=2592000)]()

# SYNOPSIS

namespace-registry is a javascript module provides namespacing.

# REQUIRE

###*ES6*

# USAGE

```javascript
    const namespace = require('namespace-registry');
    
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

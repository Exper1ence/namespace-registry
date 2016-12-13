<h1>require:</h1>
<h3>ES6</h3>
<h1>usage:</h1>
<pre><code>
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
</code></pre>

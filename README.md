<h1>namespace-registry</h1>
<h3>A javascript library to implement namespacing.</h3>

<h1>usage:</h1>

<pre><code>
const namespace = require('namespace-registry');

namespace.register({test: {a: 1, b: 2}});

module.exports = namespace.using('test', ({a, b}) => {
    console.log(a);
    console.log(b);
    return {a,b};
});
</code></pre>

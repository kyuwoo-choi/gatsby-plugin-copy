webpackJsonp([35783957827783],{"./node_modules/create-react-class/factory.js":function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=E.hasOwnProperty(t)?E[t]:null;N.hasOwnProperty(t)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function i(e,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(u)&&g.mixins(e,n.mixins);for(var s in n)if(n.hasOwnProperty(s)&&s!==u){var a=n[s],l=o.hasOwnProperty(s);if(r(l,s),g.hasOwnProperty(s))g[s](e,a);else{var p=E.hasOwnProperty(s),d="function"==typeof a,y=d&&!p&&!l&&n.autobind!==!1;if(y)i.push(s,a),o[s]=a;else if(l){var b=E[s];c(p&&("DEFINE_MANY_MERGED"===b||"DEFINE_MANY"===b),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",b,s),"DEFINE_MANY_MERGED"===b?o[s]=f(o[s],a):"DEFINE_MANY"===b&&(o[s]=m(o[s],a))}else o[s]=a}}}else;}function l(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in g;c(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;c(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=o}}}function p(e,t){c(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(c(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function d(e,t){var n=t.bind(e);return n}function y(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=d(e,r)}}function b(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=o,this.refs=a,this.updater=r||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;c("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(i.bind(null,t)),i(t,_),i(t,e),i(t,j),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),c(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in E)t.prototype[r]||(t.prototype[r]=null);return t}var h=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)i(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=s({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=s({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=s({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},j={componentWillUnmount:function(){this.__isMounted=!1}},N={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},D=function(){};return s(D.prototype,e.prototype,N),b}var i,s=n("./node_modules/object-assign/index.js"),a=n("./node_modules/fbjs/lib/emptyObject.js"),c=n("./node_modules/fbjs/lib/invariant.js"),u="mixins";i={},e.exports=r},"./node_modules/object-assign/index.js":function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,a,c=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var l in o)i.call(o,l)&&(c[l]=o[l]);if(r){a=r(o);for(var p=0;p<a.length;p++)s.call(o,a[p])&&(c[a[p]]=o[a[p]])}}return c}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/mnt/c/Users/ccumm/Work/Aquil.io/gatsby-plugin-copy/example/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/mnt/c/Users/ccumm/Work/Aquil.io/gatsby-plugin-copy/example/node_modules/babel-plugin-add-module-exports/lib/index.js","/mnt/c/Users/ccumm/Work/Aquil.io/gatsby-plugin-copy/example/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/mnt/c/Users/ccumm/Work/Aquil.io/gatsby-plugin-copy/example/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/mnt/c/Users/ccumm/Work/Aquil.io/gatsby-plugin-copy/example/node_modules/babel-preset-stage-0/lib/index.js","/mnt/c/Users/ccumm/Work/Aquil.io/gatsby-plugin-copy/example/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n("./node_modules/react/react.js"),c=o(a),u=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("p",null,"Welcome to the GatsbyJS File Copy Demo.",c.default.createElement("a",{href:"/env.txt"},"Click here"),"to see the copied env.txt file."))},t}(c.default.Component);t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-ff1722c1db6e7c14a6cf.js.map
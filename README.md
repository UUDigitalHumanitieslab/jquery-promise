# jquery-promise

A lightweight Promise polyfill based on Promises/A+ compliant $.Deferred from jQuery 3.


## Use case

jquery-promise is for you if the following conditions apply.

 - You are already using jQuery 3+ for independent reasons.
 - You need a polyfill for the ES6 `Promise` interface, for example because you are transpiling `async`/`await` syntax.
 - You want your polyfill to be as small as possible.


## Quickstart

```console
$ npm i jquery-promise
```

```js
import 'jquery-promise';
```

This will only put the polyfill in global scope if there is no `Promise` global already. The polyfill implementation is also the default export of the module.


## Limitations

This is a very thin wrapper around [`jQuery.Deferred`][2]. As a result, our wrapper does not (yet) have a test suite. jQuery itself, including `Deferred`, is already extensively tested. If you need some reassurance, read [the source][3] (60 lines total).

[2]: https://api.jquery.com/category/deferred-object/
[3]: https://github.com/UUDigitalHumanitieslab/jquery-promise/blob/develop/jquery-promise.es6

Our polyfill `Promise` interface has the same constructor, static methods and instance methods as [the standard][4]. However, objects returned after chaining `.then`, `.catch` and `.finally` lack the `.finally` method themselves. This is beyond our control, because jQuery constructs promise objects as plain objects in a closure and there is no prototype that we can extend. This is unlikely to cause problems in practice. You still get Promises/A+ compliant then-able objects.

[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

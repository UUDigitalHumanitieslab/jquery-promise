# jquery-promise

A lightweight Promise polyfill based on Promises/A+ compliant $.Deferred from jQuery 3.

[![Build Status](https://travis-ci.com/UUDigitalHumanitieslab/jquery-promise.svg?branch=develop)](https://travis-ci.com/UUDigitalHumanitieslab/jquery-promise) [![Promises/A+ 1.1 compliant](https://promisesaplus.com/assets/logo-small.png)](https://promisesaplus.com/)


## Use case

jquery-promise is for you if the following conditions apply.

 - You are already using jQuery 3+ for independent reasons.
 - You need a polyfill for the ES6 `Promise` interface, for example because you are transpiling `async`/`await` syntax.
 - You want your polyfill to be as small as possible.


## Quickstart

```console
$ npm i @dhl-uu/jquery-promise
```

```js
import '@dhl-uu/jquery-promise';
```

This will only put the polyfill in global scope if there is no `Promise` global already. The polyfill implementation is also the default export of the module.


## Limitations

This is a very thin wrapper around [`jQuery.Deferred`][2]. Our polyfill `Promise` interface has the same constructor, static methods and instance methods as [the standard][4]. However, objects returned after chaining `.then`, `.catch` and `.finally` lack the `.finally` method themselves. This is beyond our control, because jQuery constructs promise objects as plain objects in a closure and there is no prototype that we can extend. This is unlikely to cause problems in practice. You still get Promises/A+ compliant then-able objects.

[2]: https://api.jquery.com/category/deferred-object/
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


*Made by*

[![Digital Humanities Lab](http://dhstatic.hum.uu.nl/logo-lab/png/dighum-logo.png)](https://dig.hum.uu.nl)

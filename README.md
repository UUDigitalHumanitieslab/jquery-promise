# jquery-promise

A lightweight Promise polyfill based on Promises/A+ compliant $.Deferred from jQuery 3.


## Use case

jquery-promise is for you if the following conditions apply.

 - You are already using jQuery 3+ for independent reasons.
 - You need a polyfill for the ES6 `Promise` interface, for example because you are transpiling `async`/`await` syntax.
 - You prefer a polyfill that is 2.5 KB (uncompressed) to one that is [28 KB][1].

[1]: https://github.com/stefanpenner/es6-promise


## Quickstart

```console
npm i jquery-promise
```

```js
import 'jquery-promise';
```


## Limitations

This is a very thin wrapper around [`jQuery.Deferred`][2]. As a result, our wrapper does not (yet) have a test suite. jQuery itself, including `Deferred`, is already extensively tested. If you need some reassurance, read [the code][3] (60 lines total).

[2]: https://api.jquery.com/category/deferred-object/
[3]: https://github.com/UUDigitalHumanitieslab/jquery-promise/blob/develop/jquery-promise.es6

Objects returned by the polyfilled `Promise` constructor and its static `.all`, `.race`, `.resolve` and `.reject` methods exactly meet the standard with `.then`, `.catch` and `.finally` instance methods. However, objects returned after chaining `.then` etcetera are out of our control. They still meet the standard interface except for the `.finally` method, as jQuery constructs promise objects as plain objects in a closure and there is no prototype that we can extend. This is unlikely to cause problems in practice.

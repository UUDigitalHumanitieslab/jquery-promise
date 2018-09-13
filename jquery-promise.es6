/**
 * Miniature ES6 Promise polyfill based on jQuery.Deferred.
 *
 * jQuery 3 is Promises/A+ compliant, so this should be good enough for
 * most situations in which jQuery is being imported anyway.
 */

import { Deferred, when, each } from 'jquery';

function finallyImp(callback) {
    return this.then(callback, callback);
}

function toPromise(deferred, target) {
    const promise = deferred.promise(target);
    promise.finally = finallyImp;
    return promise;
}

export default function Promise(executor) {
    const deferred = Deferred();
    const resolve = deferred.resolve.bind(deferred),
        reject = deferred.reject.bind(deferred);
    executor(resolve, reject);
    return toPromise(deferred);
}

Promise.all = function(iterable) {
    return toPromise(when.apply(null, iterable));
}

Promise.race = function(iterable) {
    const deferred = Deferred();
    function resolved(value) {
        if (deferred.state() === 'pending') deferred.resolve(value);
    }
    function rejected(reason) {
        if (deferred.state() === 'pending') deferred.reject(reason);
    }
    each(iterable, (key, promise) => promise.then(resolved, rejected));
    return toPromise(deferred);
}

Promise.resolve = function(value) {
    return toPromise(Deferred().resolve(value));
}

Promise.reject = function(reason) {
    return toPromise(Deferred().reject(reason));
}

const local = global || self || window || Function('return this')();

if (local && !local.Promise) local.Promise = Promise;

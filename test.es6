/**
 * This module contains our adapter for the Promises/A+ standard test
 * suite. See https://github.com/promises-aplus/promises-tests
 */

import Polyfill from './jquery-promise';

export const resolved = Polyfill.resolve;
export const rejected = Polyfill.reject;

export function deferred() {
    const deferObj = {};
    deferObj.promise = new Polyfill((resolve, reject) => {
        deferObj.resolve = resolve;
        deferObj.reject = reject;
    });
    return deferObj;
}

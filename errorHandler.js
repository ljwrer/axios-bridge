/**
 * Created by Ray on 2016/12/13.
 */
"use strict";
/**
 *
 * @param {Promise} promise
 * @param next
 */
module.exports = function (promise,{next}) {
    promise.catch(next)
};
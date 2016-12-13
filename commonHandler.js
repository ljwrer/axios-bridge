/**
 * Created by Ray on 2016/12/13.
 */
const dataHandler = require('./dataHandler');
const errHandler = require('./errorHandler');
/**
 * @param promise
 * @param res
 * @param next
 */
module.exports = function (promise,{res,next}) {
    errHandler(dataHandler(promise,{res}),{next});
};

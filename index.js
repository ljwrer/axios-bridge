/**
 * Created by Ray on 2016/12/13.
 */
const common = require('./commonHandler');
const data = require('./dataHandler');
const error = require('./errorHandler');
module.exports = Object.assign(common,{data,error});

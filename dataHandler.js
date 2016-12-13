/**
 * Created by Ray on 2016/12/13.
 */
/**
 * @param {Promise} promise
 * @param {Response} res
 */
module.exports = function (promise,{res}) {
    return promise.then(({data}) => {
        res.json(data);
    })
};

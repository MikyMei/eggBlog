/**

 * @author MikyMei

 * @date 2022-03-08 14:13

 */




/**
 * 项目启动的时候就会执行
 * */
module.exports = (app) => {
    app.once('server', (server) => {
        // websocket
        console.log('server');
    });
    app.on('error', (err, ctx) => {
        // report error
        console.log('error');

    });
    app.on('request', (ctx) => {
        // log receive request
        console.log('request');

    });
    app.on('response', (ctx) => {
        // ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;
        // log total cost
        console.log('response');
    });
};

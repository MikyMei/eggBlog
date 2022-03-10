/**

 * @author MikyMei

 * @date 2022-03-10 14:34

 */


module.exports = (app) => {
    return async (ctx, next) => {
        ctx.socket.emit('res', 'connected!');
        console.log('connected!');

        await next();
        // execute when disconnect.
        console.log('disconnection!');
    };
    // return async (ctx, next) => {
    //     if (true) {
    //         console.log("lll");
    //         ctx.socket.disconnect();
    //         return;
    //     }
    //     await next();
    //     console.log('disconnection!');
    // };
};

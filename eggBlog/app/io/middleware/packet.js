/**

 * @author MikyMei

 * @date 2022-03-10 14:40

 */
module.exports = (app) => {
    return async (ctx, next) => {
        console.log("接受哦");
        ctx.socket.emit('res', 'packet received!');
        console.log('packet:', ctx.packet);
        await next();
    };
};

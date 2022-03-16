/**

 * @author MikyMei

 * @date 2022-03-10 14:34

 */


module.exports = (app) => {
    return async (ctx, next) => {
        ctx.socket.emit('res', 'connected!');
        console.log('connected!');
        const secret = ctx.app.config.jwt.secret;
        const token=ctx.socket.request._query.token;
        console.log(token);
        const decode = await ctx.app.jwt.verify(token, secret);
        console.log("解密之后的",decode);
        if (!decode || !decode._doc  || decode._doc.userName!=="admin") {
            await ctx.socket.emit('res', '当前用户无权');
            await ctx.socket.disconnect();
            return false;
        }else{
            console.log("进入");
            await next();
            // execute when disconnect.
            console.log('disconnection!');

        }


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

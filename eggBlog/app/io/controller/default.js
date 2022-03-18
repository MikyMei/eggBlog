/**

 * @author MikyMei

 * @date 2022-03-10 14:43

 */


'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
    async ping() {
        const { ctx, app } = this;
        const message = ctx.args[0];
        console.log(message);
        ctx.socket.on("chat", function (data) {
            console.log("socket.on接收到的", data);
        //    把接收到的发送出去再
            ctx.socket.broadcast.emit("chat",data)
        })
        await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
    }

    async ping2() {
        const { ctx, app } = this;
        const message = ctx.args[0];
        console.log("另外一个namespace",message);
        ctx.socket.on("chat", function (data) {
            console.log("socket.on接收到的", data);
            //    把接收到的发送出去再
            ctx.socket.broadcast.emit("chat",data)
        })
        await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
    }
}

module.exports = DefaultController;

// or async functions
//
// exports.ping = async function () {
//     const message = this.args[0];
//     await this.socket.emit('res', `Hi! I've got your message: ${message}`);
// };

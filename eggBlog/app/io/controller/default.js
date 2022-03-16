/**

 * @author MikyMei

 * @date 2022-03-10 14:43

 */


'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
    async ping() {
        console.log("ji");
        const { ctx, app } = this;
        const message = ctx.args[0];
        console.log(message);
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

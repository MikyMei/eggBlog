
/**

 * @author MikyMei

 * @date 2022-03-18 14:14

 */


const Controller = require('egg').Controller;

class NspController extends Controller {
    async exchange() {
        console.log("进入exchange");
        const { ctx, app } = this;
        const nsp = app.io.of('/personalChat');
        console.log("查看内容",ctx.args);
        const message = ctx.args[0] || {};
        const socket = ctx.socket;
        const client = socket.id;

        try {
            const { target, payload } = message;
            console.log("目标和",target, client);
            if (!target) return;
            const msg = ctx.helper.parseMsg('exchange', payload, { client, target });

            // socket.broadcast.in('demo').emit(target, msg);
            nsp.in('demo').emit(target, msg);
        } catch (error) {
            app.logger.error(error);
        }
    }
}

module.exports = NspController;

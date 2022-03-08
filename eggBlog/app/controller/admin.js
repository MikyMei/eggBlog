/**

 * @author MikyMei

 * @date 2022-03-08 15:08

 */
'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        const {ctx, app} = this;
        console.log("ctx.request", ctx.params);
        ctx.body = 'hi, egg';
        await app.runSchedule('console');
    }

    async adminLogin() {
        const {ctx, app, service} = this;

        const body = ctx.request.body;
        console.log("登录参数", body);
        const res = await service.admin.adminLogin(body);
        console.log(res);
        ctx.body = res;

    }

    async deleteOneUser() {
        const {ctx, app, service} = this;

        const body = ctx.query;
        console.log("删除参数", body);
        const res = await service.admin.deleteUser(body);
        console.log(res);
        ctx.body = res;

    }

    async findOneUser() {
        const {ctx, app, service} = this;

        const body = ctx.query;
        const res = await service.admin.findOne(body);
        ctx.body = res;
    }

    async updateAllUser() {
        const {ctx, app, service} = this;

        const body = ctx.request.body;
        const res = await service.admin.updateAll(body);
        ctx.body = res;
    }
}

module.exports = AdminController;

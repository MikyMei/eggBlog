/**

 * @author MikyMei

 * @date 2022-03-08 15:08

 */
'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.createRule = {
            userName: {
                type: "string",
                min: 3,
                max: 20,
                format: /^[\u4e00-\u9fa5A-Za-z0-9]{3,20}$/,

            },
            password: {
                type: "password",
                min: 6,
                max: 20,
                format: /^[A-Za-z0-9]{6,20}$/,
            }
        }
    }


    async index() {
        const {ctx, app} = this;
        console.log("ctx.request", ctx.params);
        ctx.body = 'hi, egg';
        await app.runSchedule('console');
    }

    async adminLogin() {
        const {ctx, app, service} = this;

        const data = ctx.request.body;
        ctx.validate(this.createRule, data);
        console.log("登录参数", data);
        const res = await service.admin.adminLogin(data);
        ctx.helper.success({
            ctx,
            res,
        });

    }

    async createNewUser() {
        const {ctx, app, service} = this;

        const data = ctx.request.body;
        ctx.validate(this.createRule, data);
        const res = await service.admin.createUser(data);
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

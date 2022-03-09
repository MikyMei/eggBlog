/**

 * @author MikyMei

 * @date 2022-03-08 15:11

 */


'use strict';

const Service = require('egg').Service;

class AdminService extends Service {

    async insert(data) {
        const result = await this.ctx.model.Admin.create(data);
        return result;
    }

    async adminLogin(params) {
        const {ctx, app} = this;

        const oldUser = await this.ctx.model.Admin.findOne({userName: params.userName})
        if (!oldUser) {
            return {
                msg: "用户不存在"
            }
        }

        console.log(params.password, oldUser.password);
        const isMatch = await ctx.helper.comparePassword(params.password, oldUser.password);
        if (!isMatch) {
            return {
                msg: "用户名或者密码错误"
            }
        } else {
            console.log("登录成功", isMatch);
        }

        const token = app.jwt.sign({...oldUser}, app.config.jwt.secret, {
            expiresIn: "1h"
        });


        ctx.cookies.set('token', token, {
            maxAge: 86400000,
            httpOnly: true,
        })

        return {
            data: {
                token,
                userName: oldUser.userName,
            },
            msg:"登陆成功"
        };
    }


    async adminLogout(id){
        const {ctx}=this;
        ctx.cookies.set('token',"", {
            maxAge:0,
        })

        return {
            msg:"退出登陆成功"
        }
    }

    async createUser(data) {
        const {ctx, app} = this;

        const result = await this.ctx.model.Admin.create(data)
        console.log("------------result", result);
        return result;
    }

    async deleteUser(data) {
        const result = await this.ctx.model.Admin.deleteMany(data);
        return result;
    }

    async findOne(data) {
        const result = await this.ctx.model.Admin.findOne(data);
        return result;
    }

    async updateAll(data) {
        const result = await this.ctx.model.Admin.updateMany({userName: data.userName}, {'$set': {...data}});
        return result;
    }
}

module.exports = AdminService;

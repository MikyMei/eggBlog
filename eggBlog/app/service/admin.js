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

    async adminLogin(data) {
        const {ctx}=this;
        const result =await this.ctx.model.Admin.create(data)
        console.log("------------result",result);
        return result;
    }

    async deleteUser(data){
        const result = await this.ctx.model.Admin.deleteMany(data);
        return result;
    }

    async findOne(data) {
        const result = await this.ctx.model.Admin.findOne(data);
        return result;
    }

    async updateAll(data) {
        const result = await this.ctx.model.Admin.updateMany({userName:data.userName}, { '$set': { ...data } });
        return result;
    }
}

module.exports = AdminService;

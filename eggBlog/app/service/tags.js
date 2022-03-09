/**

 * @author MikyMei

 * @date 2022-03-08 15:11

 */


'use strict';

const Service = require('egg').Service;

class TagsService extends Service {


    async create(data) {
        const {ctx, app} = this;

        /**
         * 要先保证没有相同的
         * */

        const oldTags = await ctx.model.Tags.findOne({
            name: data.name,
        })
        if (oldTags) {
            return {
                msg: "该标签已经存在"
            }
        }
        const params = {
            ...data,
            createTime: ctx.helper.moment().unix(),

        }

        const result = await this.ctx.model.Tags.create(params)
        return {
            msg: "标签添加成功",
            data: result,
        };
    }

    async delete(data) {
        const {ctx, app} = this;

        const oldTags = await ctx.model.Tags.findOne({
            name: data.name,
        })
        if (!oldTags) {
            return {
                msg: "该标签不存在"
            }
        }

        const result = await this.ctx.model.Tags.deleteOne(data)
        return {
            msg: "标签删除成功",
            data: result,
        };


    }


    /**
     * 这个需要传过来两个参数，一个是查找的依据，另一个是新的
     * */
    async update(params, data) {
        const {ctx, app} = this;

        const oldTags = await ctx.model.Tags.findOne(params)
        if (!oldTags) {
            return {
                msg: "该标签不存在"
            }
        }
        console.log("当前的标签", oldTags);
        const result = await this.ctx.model.Tags.updateMany(params, {...data, updateTime: ctx.helper.moment().unix()})
        return {
            msg: "标签修改成功",
            data: result,
        };


    }


    async findOne(data) {
        const {ctx, app} = this;

        const oldTags = await ctx.model.Tags.findOne(data)
        if (!oldTags) {
            return {
                msg: "该标签不存在"
            }
        }
        return {
            msg: "标签查询成功",
            data: oldTags,
        };
    }

    async findAll(data) {
        const {ctx, app} = this;

        const page = data.page * 1;
        const pageSize = data.pageSize * 1;
        data=ctx.helper.filterEmptyField(params)


        /**
         * name是模糊查询
         * */

        const queryCon = data.name ? {
            name: {
                $regex: new RegExp(data.name, 'i')
            }
        } : {}

        const oldTags = await ctx.model.Tags.find(queryCon).sort({
            createTime: -1,
        }).skip((page - 1) * pageSize).limit(pageSize)
        if (!oldTags) {
            return {
                msg: "该标签不存在"
            }
        }
        return {
            msg: "标签查询成功",
            data: {
                page,
                pageSize,
                list: oldTags
            },
        };

    }


}

module.exports = TagsService;

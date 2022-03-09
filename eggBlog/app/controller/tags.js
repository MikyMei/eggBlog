/**

 * @author MikyMei

 * @date 2022-03-09 14:13

 */


'use strict';

const Controller = require('egg').Controller;

class TagsController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.createRule={
            name:{
                type:"string",
                min:2,
                max:20,
                format: /^[\u4e00-\u9fa5A-Za-z0-9]{3,20}$/,
            }
        }
        this.queryListParamsRules={
            page:{
              type:"number",
                required:false,
                allowEmpty:true,
                default:1,
            },
            pageSize:{
                type:"number",
                required:false,
                allowEmpty:true,
                default:20,
            },
            name:{
                type:"string",
                min:2,
                max:20,
                format: /^[\u4e00-\u9fa5A-Za-z0-9]{3,20}$/,
            }
        }
    }

    /**
     *
     GET    /posts    posts    app.controllers.posts.index
     GET    /posts/new    new_post    app.controllers.posts.new
     GET    /posts/:id    post    app.controllers.posts.show
     GET    /posts/:id/edit    edit_post    app.controllers.posts.edit
     POST    /posts    posts    app.controllers.posts.create
     PUT    /posts/:id    post    app.controllers.posts.update
     DELETE    /posts/:id    post    app.controllers.posts.destroy
     *
     *
     * */


    /**
     * 新增， 测试成功
     * */
    async create() {

        const {ctx, service}=this;
        const data=ctx.request.body;
        console.log("data", data);
        ctx.validate(this.createRule, data);
        const res=await service.tags.create(data);
        ctx.helper.success({
            ctx,
            res,
        })


    }



    /**
     * 查询所有， 目前是根据传的参数进行查询，测试成功
     *
     * */
    async index() {
        const {ctx, service}=this;
        const data=ctx.request.body;
        ctx.validate(this.queryListParamsRules, data);
        const res=await service.tags.findAll(data);
        ctx.helper.success({
            ctx,
            res,
        })


    }


    async new() {
        console.log('new');
    }


    /**
     *
     * 只展示一个， 测试成功
     * */
    async show() {
        const {ctx, service}=this;
        const data=ctx.request.body;
        console.log(ctx.params, data);
        ctx.validate(this.createRule, data);
        const res=await service.tags.findOne(data);
        ctx.helper.success({
            ctx,
            res,
        })
    }

    async edit() {
    }


    /**
     * PUT http://127.0.0.1:7001/user2/10
     * */
    async update() {
        const {ctx, service}=this;
        const data=ctx.request.body;
        const params=ctx.query;
        console.log(ctx.params,params, data);
        ctx.validate(this.createRule, data);
        const res=await service.tags.update(params,data);
        ctx.helper.success({
            ctx,
            res,
        })
    }


    /**
     * DELETE http://127.0.0.1:7001/user2/10
     * */
    async destroy() {

        const {ctx, service}=this;
        const params=ctx.query;
        const res=await service.tags.delete(params);
        ctx.helper.success({
            ctx,
            res,
        })
    }





}

module.exports = TagsController;

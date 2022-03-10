'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller, jwt, io} = app;



    /**
     * 登录和退出登录接口
     * */
    const baseRouter = app.config.baseRouter;
    router.post(baseRouter + '/admin/login', controller.admin.adminLogin);
    router.post(baseRouter + '/admin/logout', controller.admin.adminLogout);

    /**
     * 标签的增删改查
     * */
    router.resources('tags', baseRouter +'/tags',jwt,  controller.tags);

    /**
     * websocket
     * */

    // io.of('/').route('server', io.controller.home.server);
    io.of('/').route('server', io.controller.default.ping);
    // io.route('chat', app.io.controller.chat.index);

    router.delete('/admin/deleteUser',jwt, controller.admin.deleteOneUser);
    router.get('/admin/findOneUser', controller.admin.findOneUser);
    router.post('/admin/updateAllUser', controller.admin.updateAllUser);
};

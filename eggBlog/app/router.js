'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;


    const baseRouter = app.config.baseRouter;
    router.post(baseRouter + '/admin/login', controller.admin.adminLogin);
    router.delete('/admin/deleteUser', controller.admin.deleteOneUser);
    router.get('/admin/findOneUser', controller.admin.findOneUser);
    router.post('/admin/updateAllUser', controller.admin.updateAllUser);
};

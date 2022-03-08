'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;


  router.post('/admin/login', controller.admin.adminLogin);
  router.post('/admin/deleteUser', controller.admin.deleteOneUser);
  router.get('/admin/findOneUser', controller.admin.findOneUser);
  router.post('/admin/updateAllUser', controller.admin.updateAllUser);
};

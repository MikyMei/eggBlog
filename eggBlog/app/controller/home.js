'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    console.log("ctx.request", ctx.params);
    ctx.body = 'hi, egg';
    await app.runSchedule('console');
  }
}

module.exports = HomeController;

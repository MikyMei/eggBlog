/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646718149970_9701';

  // add your middleware config here
  config.middleware = ["errorHandler", "auth"];
  config.auth={
    WhiteList:["admin"]
  }


  exports.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:exports/eggDemo',
      options: {
        useUnifiedTopology: true,
      },
    },
  };
  exports.validate = {
    // convert: false,
    // validateRoot: false,
  };

  exports.jwt = {
    secret: "never"
  };

  exports.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'connection' ],
        packetMiddleware: [ 'packet' ],
      },
      '/personalChat': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [  ],
      },
      // cluster 模式下，通过 redis 实现数据共享
      redis: {
        host: '127.0.0.1',
        port: 6379,
      },
      // '/example': {
      //   connectionMiddleware: [],
      //   packetMiddleware: [],
      // },
    },
  };




  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    baseRouter:'/api/v1'
  };

  return {
    ...config,
    ...userConfig,
  };
};

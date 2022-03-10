'use strict';

/** @type Egg.EggPlugin */
exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};


exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};

/**
 * 开启跨域
 * */
exports.cors = {
    enable: true,
    package: 'egg-cors',
};

exports.validate = {
    enable: true,
    package: 'egg-validate',
};

exports.jwt = {
    enable: true,
    package: "egg-jwt"
};


// 启用websocket插件
exports.io = {
    enable: true,
    package: 'egg-socket.io',
};


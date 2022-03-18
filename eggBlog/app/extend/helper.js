/**

 * @author MikyMei

 * @date 2022-02-24 16:01

 */



const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = {

    moment,


    // 加密密码
    genSaltPassword(password) {

        return new Promise((resolve, reject) => {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, function (err, hash) {
                        // Store hash in your password DB.

                        if (!err) {

                            resolve(hash)

                        } else {

                            reject(err)
                        }

                    });
                });
            }
        )
    },

    /**
     *未加密的密码 _password
     * 数据库拿到的密码 password
     * 揭秘密码,*/
    comparePassword(_password, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, function (err, result) {
                // result == true

                if (!err) {

                    resolve(result)

                } else {

                    reject(err)
                }
            });
        })
    },


    success({ctx, res = null}) {
        ctx.status = res.status ? res.status : 200;
        if (res.status) {
            delete res.status;
        }
        ctx.body = {
            ...res,
            data: res.data ? res.data : null,
            code: res.code ? res.code : 0,  // 0代表成功，其他代表失败
            msg: res.msg ? res.msg : "请求成功"
        }
    },


    filterEmptyField(params) {
        let pam={};
        for (let i in params){
            if (params[i]){
                if (i!="page"&&i!="pagesize"){
                    pam[i]=params[i]
                }

            }
        }
        return pam;
    },


    /**
     * 框架扩展用于封装数据格式,
     * 处理之后的格式：
     *
     * {
          data: {
            action: 'exchange',  // 'deny' || 'exchange' || 'broadcast'
            payload: {},
          },
          meta:{
            timestamp: 1512116201597,
            client: 'nNx88r1c5WuHf9XuAAAB',
            target: 'nNx88r1c5WuHf9XuAAAB'
          },
        }
     * */
    parseMsg(action, payload = {}, metadata = {}) {
        const meta = Object.assign(
            {},
            {
                timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            metadata,
        );

        return {
            meta,
            data: {
                action,
                payload,
            },
        };
    },


};

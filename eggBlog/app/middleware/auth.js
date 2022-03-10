/**

 * @author MikyMei

 * @date 2022-03-10 10:40

 */


module.exports = () => {
    return async function auth(ctx, next) {


        const currentUrl = ctx.request.url;
        console.log(currentUrl);

        // 有选择性地对某些请求进行token进行校验，例如登录，注册，退出登录之类的就不需要进行校验

        const urlWhiteList = ["/admin/login", "/admin/logout"];
        const whiteList = ctx.app.config.auth.WhiteList;
        const secret = ctx.app.config.jwt.secret;


        // 判断是否需要验证， 如果在就不需要，否则就需要
        let isNoValidate = urlWhiteList.some(item => {
            return currentUrl.indexOf(item) > -1;
        })


        if (isNoValidate) {
            await next();
        } else {
            const Authorization = ctx.request.header.authorization;
            if (Authorization) {

                const token = Authorization.replace("Bearer ", "");
                const decode = await ctx.app.jwt.verify(token, secret);

                const userName = decode._doc.userName;
                // 尝试退出登陆之后的，token是否还有小。预测肯定有效， 确实有效
                console.log("解析之后的用户名", userName);

                // 只有让admin可以使用，否则就禁止
                if (whiteList.includes(userName)) {
                    await next();

                } else {
                    ctx.status = 403;
                    ctx.helper.success({
                        ctx,
                        res: {
                            msg: "无权访问",
                            code: 0,
                            data: null,
                            status: 403

                        }
                    })
                }


            }

        }


    };
}

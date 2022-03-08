/**

 * @author MikyMei

 * @date 2022-03-08 15:02

 */


const helper=require("../extend/helper")

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const AdminSchema = new Schema({
        userName: {
            type: String,
            min: 3,
            max: 20,
            format: /^[\u4e00-\u9fa5A-Za-z0-9]{3,20}$/,
        },
        password: {type: String},
    }, {
        versionKey: false,
        collection: "admin"
    })

    const AdminModel= mongoose.model('Admin', AdminSchema);

    let adminUser={
        userName:"admin",
        password:"123456",
    }
    helper.genSaltPassword(adminUser.password).then(async (hash)=>{
        adminUser.password=hash;
        const oldUser= await AdminModel.find({userName:adminUser.userName});
        if (oldUser.length==0){
            // "保证第一次没有的管理员账号的时候就会创建一个管理员账号"
            AdminModel.create(adminUser)
        }
    })

    return AdminModel;


}

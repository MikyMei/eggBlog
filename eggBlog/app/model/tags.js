/**

 * @author MikyMei

 * @date 2022-03-08 15:02

 */


const helper=require("../extend/helper")

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const TagsSchema = new Schema({
        name: {
            type: String,
            min: 2,
            max: 20,
            format: /^[\u4e00-\u9fa5A-Za-z0-9]{3,20}$/,
            comment:"标签名字",
        },
        createTime:{
          type:"number",
          default:0,
            comment:"创建时间",

        },
        updateTime:{
            type:"number",
            default:0,
            comment:"更新时间",

        },
        articleNum:{
            type:"number",
            default:0,
            comment:"文章数量",

        },
        status:{
            type:"boolean",
            default:true,
            comment:"状态",

        },

    }, {
        versionKey: false,
        collection: "tags"
    })



    return mongoose.model('Tags', TagsSchema);


}

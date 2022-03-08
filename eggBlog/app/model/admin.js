/**

 * @author MikyMei

 * @date 2022-03-08 15:02

 */


module.exports =app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema;

    const AdminSchema= new Schema({
        userName:{type:String},
        password:{type:String},
    },{
        versionKey:false,
        collection:"admin"
    })

    return mongoose.model('Admin', AdminSchema);


}

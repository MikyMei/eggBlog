/**

 * @author MikyMei

 * @date 2022-03-08 14:38

 */


module.exports={
    schedule: {
        interval:'1h',// 1分钟
        type: 'all', // 每台机器的每个worker都会执行的任务
        immediate:true,
    },

    async task(ctx){
        console.log("定时任务执行");

    }
}

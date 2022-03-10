/**

 * @author MikyMei

 * @date 2022-03-10 16:40

 */
module.exports = app => {
    return function* (next) {
        this.socket.emit('res', 'packet received!');
        console.log('packet:', this.packet);
        yield* next;
    };
};

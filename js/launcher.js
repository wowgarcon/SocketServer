const io = require('socket.io');
const chatCtr = require('./controller/chatController');

module.exports = server => {
    const socketio = io(server);
    const adminNameSpace = socketio.of('/admin');
    const chatNameSpace = socketio.of('/chat');
    
    adminNameSpace.use((socket, next) => {
        //권한체크 코드 삽입
        next();
    });
    adminNameSpace.on('connection', socket => { 
        console.log(`Socket Admin '${socket.id}' is Connected`); 
    });

    chatNameSpace.on('connection', socket => { 
        console.log(`Socket Chat user '${socket.id}' is Connected`); 
        chatCtr(socket);
    });
}
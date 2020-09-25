const socketio = require('socket.io');
const chat = require('./controller/chatController');

module.exports = (app, port) => {
    socketio.listen(port);
    const adminNameSpace = socketio.of('/admin');
    const chatNameSpace = socketio.of('/chat');
    
    adminNameSpace.use((socket, next) => {
        //권한체크 코드 삽입
        next();
    });
    adminNameSpace.on('connection', socket => { 
        console .log('Socket Admin Connected'); 
    });

    chatNameSpace.on('connection', socket => { 
       chatCon.log('Socket Chat Connected'); 
       chat(socket);
    });
}
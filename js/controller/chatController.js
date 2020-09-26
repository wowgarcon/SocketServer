const chatService = require('../service/chatService');

module.exports = socket => {

    socket.on('chat', async data => {
        switch(data.operation){
            case "createRoom":
                break;
            case "terminateRoom":
                break;
            case "joinRoom":
                break;
            case "exitRoom":
                break;
            case "sendMessage":
                chatService.sendMessage(socket, data);
                break;
            case "receiveMessage":
                break;
        }
    })
};
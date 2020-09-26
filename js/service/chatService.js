exports.sendMessage = (socket, data) => {
    console.log(data.message);
    let result = {
        'socketId' : socket.id,
        'operation' : 'receiveMessage',
        'message' : data.message,
        'sendTime' : data.sendTime
    }
    socket.emit('chat', result);
};
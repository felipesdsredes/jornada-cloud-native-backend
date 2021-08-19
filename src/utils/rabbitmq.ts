import * as amqplib from 'amqplib';

function connect(){
    return amqplib.connect("amqp://localhost")
        .then(conn => conn.createChannel());
}
   
function createQueue(channel, queue){
    return new Promise((resolve, reject) => {
        try{
        channel.assertQueue(queue, { durable: true });
        resolve(channel);
        }
        catch(err){ reject(err) }
    });
}
   
export const sendToQueue = (queue, message) => {
    connect()
        .then(channel => createQueue(channel, queue))
        .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
        .catch(err => console.log(err))
}

export const consume = (queue, callback) => {
    connect()
        .then(channel => createQueue(channel, queue))
        .then(channel => channel.consume(queue, callback, { noAck: true }))
        .catch(err => console.log(err));
}
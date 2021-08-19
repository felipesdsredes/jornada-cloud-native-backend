import { consume } from './utils/rabbitmq';
import Send from './utils/nodemailer';
import { user } from './utils/mongodb';

// Consumo da fila do Rabbitmq
consume('email', async (message) => {
    console.log(message.content.toString());
    const content = JSON.parse(message.content.toString());
    console.log(content);
    
    // Salvando no MongoDB
    const responseMongo = await user.create(content);
    console.log('-------------------------------');
    console.log(responseMongo);

    // Enviando e-mail
    const send = new Send();
    const responseMailer = await send.send(content);
    console.log('-------------------------------');
    console.log(responseMailer);
});
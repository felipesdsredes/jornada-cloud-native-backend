# Jornada Cloud Native Backend

Este repositório contém o código-fonte e a documentação para o projeto "Jornada Cloud Native Backend". O objetivo deste projeto é desenvolver uma API backend que utiliza uma arquitetura de nuvem nativa, e que servirá como exercício prático para o livro da Jornada Colaborativa Cloud Native.

## Visão Geral
O projeto consiste em uma API backend construída utilizando as seguintes tecnologias e ferramentas:

- **Framework**: [Node.js](https://nodejs.org/): Uma plataforma de desenvolvimento JavaScript em tempo de execução construída com o mecanismo V8 do Chrome.
- **Framework Web**: [Express](https://expressjs.com/): Um framework web rápido, não opinativo e minimalista para Node.js.
- **Banco de Dados**: [MongoDB](https://www.mongodb.com/): Um banco de dados NoSQL orientado a documentos.
- **ORM**: [Mongoose](https://mongoosejs.com/): Uma biblioteca do Node.js que fornece uma solução baseada em esquemas para modelar os dados da aplicação.

Além disso, o projeto segue as práticas recomendadas para desenvolvimento cloud-native, como a utilização de contêineres Docker para garantir a portabilidade e a implantação em um ambiente de nuvem, como [Amazon Web Services (AWS)](https://aws.amazon.com/).

## Rota da API
- /cadastro-email
    - Body da requisição: {
      userEmail: "myemail@gmail.com",
      userName: "my name"
    }

## Pré-requisitos para configurar a aplicação localmente

-  **Node v16**

-  **NPM**

## Configuração do Ambiente

Antes de executar a API, é necessário configurar o ambiente localmente. Siga as etapas abaixo:

1. **Clone o repositório**

   ```
   git clone https://github.com/felipesdsredes/jornada-cloud-native-backend.git
   ```

2. **Instale as dependências**

   Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências necessárias:

   ```
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, que são:
    - NODEMAILER_HOST= URL do serviço SMTP do seu e-mai. Exemplo: smtp.office365.com
    - NODEMAILER_USER= E-mail que será utilizado para autenticar via smtp e que será utilizado para enviar os e-mails da app.
    - NODEMAILER_PASS= Senha do e-mail informado como NODEMAILER_PASS.
    - MONGODB_USERNAME= Nome de usuário do seu banco de dados MongoDB.
    - MONGODB_PASSWORD= Senha do seu usuário do banco de dados MongoDB.
    - MONGODB_HOST= Host do seu banco de dados MonboDB. Exemplo: cluster-jornada-colabor.0ij5x9x.mongodb.net/jornada-cloud-native?retryWrites=true&w=majority



4. **Inicie o banco de dados**

   Certifique-se de que o MongoDB esteja instalado e em execução localmente, ou forneça uma URL de conexão válida no arquivo `.env`.

## Executando a API

Após configurar o ambiente, você pode executar a API localmente. Utilize o seguinte comando:

```
npm start
```

Isso iniciará o servidor e a API estará disponível para ser acessada em [http://localhost:3333](http://localhost:3333).

# Usar a imagem base do Node.js
FROM node:16

# Diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Cópia dos artefatos da aplicação
COPY . /usr/src/app

# Instalar as dependências
RUN npm install

# Expor a porta em que a aplicação está executando
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["npm", "start"]

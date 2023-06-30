# Usar a imagem base do Node.js
FROM node

# Diretório de trabalho dentro do contêiner
WORKDIR /webapp

RUN apt-get update && apt-get install -y git

# Clonar o repositório do GitHub
RUN git clone https://github.com/felipesdsredes/jornada-cloud-native-backend.git

# Instalar as dependências
RUN npm install

# Expor a porta em que a aplicação está executando
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["npm", "start"]

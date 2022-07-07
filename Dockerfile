FROM node:16.15.0-alpine
WORKDIR /home/node
EXPOSE 3000
EXPOSE 3001
USER node
ENV CI=true

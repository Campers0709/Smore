FROM node:16.15.0-alpine
WORKDIR /home/root
EXPOSE 3000
EXPOSE 3001
USER root
ENV CI=true

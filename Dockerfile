FROM node:16.15.0-alpine
WORKDIR /home/root
EXPOSE 4444
USER root
ENV CI=true

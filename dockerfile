FROM node:latest
WORKDIR /app
COPY . .
RUN cd server && npm i 
RUN cd client && npm i
RUN cd client && npm run build
RUN sudo chmod +x ./start.sh

EXPOSE 3000 

CMD ./start.sh


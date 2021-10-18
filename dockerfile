FROM node:latest
WORKDIR /app
COPY . .
RUN sudo chmod g+x .
RUN sudo cd server && sudo npm i 
RUN sudo cd client && sudo npm i
RUN sudo cd client && sudo npm run build
RUN sudo chmod +x ./start.sh

EXPOSE 3000

CMD ./start.sh


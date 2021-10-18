FROM node:latest
WORKDIR /app
COPY . .
RUN ["chmod", "+x", "./installjs.sh"]
RUN ./installjs.sh
RUN  chmod +x ./start.sh

EXPOSE 3000 

CMD ./start.sh


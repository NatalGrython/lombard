FROM node:latest
WORKDIR /app
COPY . .
RUN ls -a
RUN ["chmod", "+x", "./Installjs.sh"]
RUN ./installjs.sh
RUN  chmod +x ./start.sh

EXPOSE 3000 

CMD ./start.sh


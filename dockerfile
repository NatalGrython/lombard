FROM node:latest
WORKDIR /app
COPY . .
RUN ls -a
RUN ["chmod", "+x", "./Installjs.sh"]
RUN ./Installjs.sh
RUN  chmod +x ./start.sh

EXPOSE 3000 

CMD ./start.sh


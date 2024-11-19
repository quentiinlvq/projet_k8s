FROM node:18
LABEL authors="Quentin L."

#ENTRYPOINT ["top", "-b"]

#RUN apt-get update -yq \
#&& apt-get install curl gnupg -yq \
#&& curl -sL https://deb.nodesource.com/setup_18.x | bash \
#&& apt-get install nodejs -yq \
#&& apt-get clean -y

#ADD . /app/

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 2368
VOLUME /app/logs

CMD ["npm", "run", "start"]
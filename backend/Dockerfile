FROM ubuntu:latest
LABEL authors="UX535"

ENTRYPOINT ["top", "-b"]

RUN apt-get update -yq \
&& apt-get install curl gnupg -yq \
&& curl -sL https://deb.nodesource.com/setup_18.x | bash \
&& apt-get install nodejs -yq \
&& apt-get clean -y

ADD . /app/

WORKDIR /app

RUN yarn install

EXPOSE 2368
VOLUME /app/logs

CMD npm run start
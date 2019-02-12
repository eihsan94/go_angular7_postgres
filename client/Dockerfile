FROM node:8.11-alpine as builder

RUN mkdir /noto
ADD https://noto-website.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip /noto 
WORKDIR /noto

RUN unzip NotoSansCJKjp-hinted.zip

FROM node:8.11-alpine

RUN apk --no-cache  update && \
    apk --no-cache  upgrade && \
    echo "http://dl-2.alpinelinux.org/alpine/edge/main" > /etc/apk/repositories && \
    echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories && \
    echo "http://dl-2.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories
RUN npm rebuild node-sass

RUN \
    apk add --no-cache --virtual .build-deps \
    gifsicle pngquant optipng libjpeg-turbo-utils \
    udev ttf-opensans chromium \
  && rm -rf /var/cache/apk/* /tmp/*

ENV CHROME_BIN /usr/bin/chromium-browser
ENV LIGHTHOUSE_CHROMIUM_PATH /usr/bin/chromium-browser
RUN npm install -g @angular/cli

RUN mkdir -p /usr/share/fonts/noto
COPY --from=builder /noto/*.otf /usr/share/fonts/noto/
RUN fc-cache -fv
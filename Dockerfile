FROM denoland/deno:alpine-1.37.0

EXPOSE 10000

WORKDIR /app

COPY . .

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-read", "--allow-write", "--allow-env", "--no-check", "app.js" ]

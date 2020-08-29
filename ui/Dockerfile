ARG UID
ARG GID
FROM node:14.4-slim as builder
RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y g++ build-essential python3
WORKDIR /usr/src/app
USER ${UID}:${GID}
COPY ./yarn.lock ./
RUN yarn

# RUNTIME
FROM node:14.4-slim as runner
WORKDIR /usr/src/app
USER ${UID}:${GID}
COPY . .
COPY --from=builder /usr/src/app/node_modules ./node_modules
ENV LANG=en_US.UTF-8
EXPOSE 3000
CMD ["yarn", "dev"]


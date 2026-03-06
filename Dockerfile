FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG FRONTEND_URL
ENV FRONTEND_URL=${FRONTEND_URL}

RUN npm run build

EXPOSE 3001

CMD ["npm", "start", "--", "-p", "3001"]
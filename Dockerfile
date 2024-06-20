FROM node:alpine

# Install dependencies for bcrypt
RUN apk add --no-cache python3 make g++

WORKDIR /user

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]

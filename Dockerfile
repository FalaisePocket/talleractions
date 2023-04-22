
# ---- Construye la aplicación Express ----
FROM node:18
WORKDIR /tallergithubactions/
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "sum.js"]

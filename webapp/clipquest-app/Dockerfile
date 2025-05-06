# 1) Собираем статические файлы
FROM node:18-alpine AS builder
WORKDIR /app

# Копируем package.json и ставим зависимости
COPY package*.json ./
RUN npm ci

# Копируем весь код и билдим
COPY . .
RUN npm run build

# 2) Сервируем через nginx
FROM nginx:alpine
# Удаляем дефолтный контент
RUN rm -rf /usr/share/nginx/html/*
# Копируем билд из builder
COPY --from=builder /app/dist /usr/share/nginx/html

# (Опционально) проксируйте /api к вашему API:
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

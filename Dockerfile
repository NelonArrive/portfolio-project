# Установите базовый образ
FROM node:20-alpine

# Установите рабочую директорию
WORKDIR /app

# Скопируйте файлы package.json и yarn.lock
COPY package.json yarn.lock ./

# Установите зависимости
RUN yarn install

# Скопируйте остальные файлы
COPY . .

# Соберите приложение
RUN yarn build

# Укажите команду запуска
CMD ["yarn", "start"]
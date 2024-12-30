# Sử dụng Node.js làm base image
FROM node:16-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Cài đặt Expo CLI
RUN npm install -g expo-cli

# Mở các cổng mặc định của Expo
EXPOSE 19000 19001 19002

# Lệnh khởi động ứng dụng
CMD ["expo", "start", "--tunnel"]

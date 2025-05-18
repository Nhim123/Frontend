# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Install Expo CLI globally
RUN npm install -g expo-cli

# Expose Expo default ports
EXPOSE 8081 19000 19001 19002

# Start Expo development server
CMD ["expo", "start", "--tunnel"]

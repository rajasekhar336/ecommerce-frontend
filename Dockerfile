# Step 1: Use Node.js 18 to build the app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci --production --silent

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build --silent

# Step 2: Use nginx to serve the built app
FROM nginx:alpine

# Copy build files to nginx's default HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

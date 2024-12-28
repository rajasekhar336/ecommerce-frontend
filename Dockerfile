# Step 1: Use the official Node.js image to build the React app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
# Install dependencies
RUN npm ci --production --verbose


# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build --silent

# Step 2: Use nginx to serve the React app
FROM nginx:alpine

# Copy the build files from the previous step into nginx's default html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Set environment variables
ENV TZ=Asia/Kolkata
ENV NGINX_WORKER_PROCESSES=2

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# Health check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost || exit 1

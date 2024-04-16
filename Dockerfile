# Step 1: Build React App
# Using a Node.js base image
FROM node:18-alpine as build
WORKDIR /app
# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application
COPY . .
# Build the app using Vite
RUN npm run build

# Step 2: Serve with Nginx
# Using a lightweight Nginx image
FROM nginx:1.23-alpine
# Set working directory to Nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf *
# Copy static assets from builder stage
COPY --from=build /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# Expose port 80 to the outside
EXPOSE 80

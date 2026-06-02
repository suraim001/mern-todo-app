# Use Node.js 22 alpine image for the build stage
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./

# Force npm to install the native platform binding for Alpine
RUN npm config set libc musl && npm install

COPY . .

# Build the production application
RUN npm run build

# Production server stage (using Nginx)
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
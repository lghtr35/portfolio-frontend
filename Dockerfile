# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./*.json ./

# Install dependencies
RUN npm ci --production

# Copy all files
COPY ./ ./

# Clean the cache
RUN npm cache clean --force

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER root

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
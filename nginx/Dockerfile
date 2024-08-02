FROM nginx:latest

# Copy the main nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the default server config
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
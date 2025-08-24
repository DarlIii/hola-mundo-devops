# Usar una imagen base de Nginx
FROM nginx:alpine

# Copiar los archivos HTML a la carpeta de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

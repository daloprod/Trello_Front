# Utilisez une image de base (par exemple, Node.js, Python, etc.)
FROM node:20

# Copiez les fichiers du projet dans le conteneur
COPY . /app

# Définissez le répertoire de travail
WORKDIR /app

# Installez les dépendances
RUN npm install

# Exposez le port nécessaire par votre application
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["npm", "start"]

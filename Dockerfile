FROM node:14

COPY . application

WORKDIR "/application/run_on_cloud"

RUN npm run install:backend
RUN npm run install:frontend
RUN npm run build:backend
RUN npm run build:frontend

EXPOSE 8000
CMD ["npm", "run", "start"]
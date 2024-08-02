# Spam Email Detection App

This is a machine learning application that detects spam emails. It is deployed using Docker with the following components:

- **Flask API**: Backend API for the machine learning model.
- **Next.js Frontend**: Frontend interface built with Next.js.
- **Nginx**: Acts as a reverse proxy between the API and the frontend.

### ML Model

For more information on the model used in this application, please refer to the Jupyter Notebook in this repository: [[Spam Classificatioa machine learning application that detects spam emailsn Model](https://github.com/eym3n/spam-classification)]

## Getting Started

Download Docker Desktop for Mac or Windows. Docker Compose will be automatically installed. On Linux, make sure you have the latest version of Compose.

## File Structure

The file structure of this Dockerized app is organized as follows:

- **docker-compose.yml**: Defines the services for Flask, frontend, and Nginx.
- **api/**: Contains the Flask API code.
- **frontend/**: Contains the Next.js frontend code.
- **nginx/**: Contains Nginx as our reverse proxy.

## Usage

To build the Docker containers, run the following command:

```bash
docker-compose build
```

To run the application, use the following command:

```bash
docker-compose up -d
```

This will start all the services in the background. You can then access the application at `http://localhost`.

## Ressources

For more information on the technologies used in this application, please refer to the following documentation:

- **Docker**: [https://docs.docker.com/](https://docs.docker.com/)
- **Next.js**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Nginx**: [https://nginx.org/en/docs/](https://nginx.org/en/docs/)
- **Flask**: [https://flask.palletsprojects.com/en/2.2.x/](https://flask.palletsprojects.com/en/2.2.x/)

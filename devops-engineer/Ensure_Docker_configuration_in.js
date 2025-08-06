{
    "code": "version: '3.8'\nservices:\n  mongodb:\n    image: mongo:latest\n    container_name: task_manager_mongodb\n    ports:\n      - '27017:27017'\n    volumes:\n      - mongodb_data:/data/db\n    environment:\n      - MONGO_INITDB_ROOT_USERNAME=root\n      - MONGO_INITDB_ROOT_PASSWORD=example\n\n  backend:\n    build: ./backend\n    container_name: task_manager_backend\n    ports:\n      - '3001:3001'\n    environment:\n      - DB_URL=mongodb://root:example@mongodb:27017/\n      - DB_NAME=taskmanager\n    depends_on:\n      - mongodb\n\n  frontend:\n    build: ./frontend\n    container_name: task_manager_frontend\n    ports:\n      - '3000:3000'\n    depends_on:\n      - backend\n\nvolumes:\n  mongodb_data:\n",
    "summary": "The Docker configuration defines three services: MongoDB, backend, and frontend. The MongoDB service uses the latest official Mongo image, exposes port 27017, and sets up a volume for data persistence. The backend service is built from the backend directory, exposes port 3001, and sets environment variables for database connection, depending on the MongoDB service. The frontend service is built from the frontend directory, exposes port 3000, and depends on the backend service being available. A named volume 'mongodb_data' is used to persist MongoDB data.",
    "checklist": [
        "Define MongoDB service with the latest image and environment variables for root access",
        "Set up a persistent volume for MongoDB data",
        "Define backend service with build context and environment variables for database connection",
        "Ensure backend service depends on MongoDB service",
        "Define frontend service with build context",
        "Ensure frontend service depends on backend service",
        "Expose necessary ports for each service"
    ]
}
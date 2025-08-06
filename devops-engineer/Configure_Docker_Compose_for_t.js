{
    "code": "version: '3.8'\n\nservices:\n  frontend:\n    build: ./frontend\n    ports:\n      - '3000:3000'\n    volumes:\n      - ./frontend:/app\n      - /app/node_modules\n    environment:\n      - NODE_ENV=development\n    depends_on:\n      - backend\n\n  backend:\n    build: ./backend\n    ports:\n      - '5000:5000'\n    volumes:\n      - ./backend:/app\n      - /app/node_modules\n    environment:\n      - NODE_ENV=development\n    depends_on:\n      - mongo\n\n  mongo:\n    image: mongo:latest\n    ports:\n      - '27017:27017'\n    volumes:\n      - mongo-data:/data/db\n\nvolumes:\n  mongo-data:\n",
    "summary": "The Docker Compose configuration defines three services: 'frontend', 'backend', and 'mongo'. The frontend service is set up to build from the 'frontend' directory, exposing port 3000, and mounting volumes for live code updates. The backend service is configured similarly, building from the 'backend' directory, exposing port 5000, and mounting volumes. The 'mongo' service uses the latest MongoDB image, exposes port 27017, and mounts a volume for persistent data storage. The 'frontend' service depends on the 'backend', and the 'backend' service depends on 'mongo'.",
    "checklist": [
        "Define service for the frontend application",
        "Define service for the backend application",
        "Define service for the MongoDB database",
        "Map ports for each service to the host",
        "Mount volumes for persistent data and live code updates",
        "Set up dependency order with 'depends_on'",
        "Use environment variables to set the node environment"
    ]
}
{
    "code": "FROM node:14\n\n# Create app directory\nWORKDIR /usr/src/app\n\n# Install app dependencies\n# A wildcard is used to ensure both package.json AND package-lock.json are copied\n# where available (npm@5+)\nCOPY package*.json ./\n\nRUN npm install\n# If you are building your code for production\n# RUN npm ci --only=production\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 3000\nCMD [ \"npm\", \"start\" ]",
    "summary": "The Dockerfile provided sets up a Node.js environment using the official Node 14 image. It creates a working directory for the application, copies package.json and package-lock.json files, installs the necessary dependencies, copies the rest of the application source code, exposes port 3000, and specifies the command to start the application using npm.",
    "checklist": [
        "Use node:14 as the base image",
        "Set the working directory to /usr/src/app",
        "Copy package.json and package-lock.json",
        "Install dependencies with npm install",
        "Copy the application source code",
        "Expose port 3000",
        "Set the command to start the app with npm start"
    ]
}
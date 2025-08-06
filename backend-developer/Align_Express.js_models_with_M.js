{
    "code": "const mongoose = require('mongoose');\n\nconst taskSchema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: false\n    },\n    status: {\n        type: String,\n        enum: ['pending', 'in_progress', 'completed'],\n        default: 'pending'\n    },\n    dueDate: {\n        type: Date,\n        required: false\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    updatedAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n\nconst Task = mongoose.model('Task', taskSchema);\n\nmodule.exports = Task;",
    "summary": "Aligned Express.js models with MongoDB schemas by defining a Mongoose schema for tasks, which includes fields for title, description, status, due date, and timestamps for creation and updates. The status field is enumerated to only allow specific values. This schema is then used to create a Mongoose model for tasks, which can be used throughout the Express.js application to interact with the tasks collection in MongoDB.",
    "checklist": [
        "Define Mongoose schema for tasks",
        "Set required fields and default values",
        "Create Mongoose model for tasks",
        "Export the Task model for use in the Express.js application"
    ]
}
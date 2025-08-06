{
    "code": "const mongoose = require('mongoose');\n\nconst taskSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  description: {\n    type: String,\n    default: '',\n    trim: true\n  },\n  status: {\n    type: String,\n    enum: ['pending', 'in_progress', 'completed'],\n    default: 'pending'\n  },\n  priority: {\n    type: String,\n    enum: ['low', 'medium', 'high'],\n    default: 'medium'\n  },\n  dueDate: {\n    type: Date,\n    default: null\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  },\n  updatedAt: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nmodule.exports = mongoose.model('Task', taskSchema);",
    "summary": "Created a MongoDB schema for tasks using Mongoose. The schema includes fields for title, description, status, priority, dueDate, createdAt, and updatedAt. The status field is an enum with values 'pending', 'in_progress', and 'completed'. The priority field is an enum with values 'low', 'medium', and 'high'. Both createdAt and updatedAt fields are automatically set to the current date.",
    "checklist": [
        "Define task schema with Mongoose",
        "Set required fields and default values",
        "Create enums for status and priority fields"
    ]
}
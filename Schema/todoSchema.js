import mongoose from 'mongoose';

// Define a schema for the User
const todoSchema = new mongoose.Schema({
  addedtask: {
    type: String,
    required: true,
    unique: true,
  },
  Date: { 
    type: Date,
    default: Date.now
  }
});

// Create a User model from the schema
const Task = mongoose.model('Task', todoSchema);

export default Task;

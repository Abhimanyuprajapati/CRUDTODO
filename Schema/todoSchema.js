import mongoose from 'mongoose';

// Define a schema for the User
const todoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Create a User model from the schema
const Task = mongoose.model('Task', todoSchema);

export default Task;

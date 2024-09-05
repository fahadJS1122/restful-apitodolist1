const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,   

  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

// Connect to MongoDB (Adding my actual database URL)
mongoose.connect('mongodb://localhost:27017/restfulapi', { useNewUrlParser: true, useUnifiedTopology: true });

const newTask = new Task({
  title: 'restfullapi', 
  email: 'fbkhani1122@gmail.com',
  description: 'task is about making an api',
  // completed will default to false
  // createdAt will default to the current date
});

newTask.save((err, savedTask) => {
    if (err) {
      console.error('Error saving task:', err); //in case if there is error 
    } else {
      console.log('Task saved successfully:', savedTask); //and if task has been successfylly saved 
    }
  
    mongoose.connection.close();  // Close the connection after saving
  });
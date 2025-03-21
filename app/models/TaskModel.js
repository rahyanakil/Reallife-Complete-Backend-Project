import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({});

const TaskModel = mongoose.model("Task", TastSchema);
export default TaskModel;

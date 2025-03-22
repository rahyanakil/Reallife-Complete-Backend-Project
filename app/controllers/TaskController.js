export const CreateTask = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "CreateTask Successfull" });
};

export const UpdateTaskStatus = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "UpdateTaskStatus Successfull" });
};

export const TaskListByStatus = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "TaskListByStatus Successfull" });
};

export const DeleteTask = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "DeleteTask Successfull" });
};

export const CountTask = async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", Message: "CountTask Successfull" });
};

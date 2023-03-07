const taskskModel = require("../models/tasksModel");

const getAll = async (_request, response) => {

  const tasks = await taskskModel.getAll();

  return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await taskskModel.createTask(request.body);
    return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
    const { id } = request.params;

    await taskskModel.deleteTask(id);
    return response.status(204).json();
};

const updateTask = async (request, response) => {
    const { id } = request.params;

    await taskskModel.updatedTask(id, request.body);
    return response.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};

import * as types from '../constants/action-type';

export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task: task
  }
};
import { makeAutoObservable } from "mobx";

export default class Todo {
  quadrant;
  id;
  task = "";
  completed = false;

  constructor(id, quadrant) {
    makeAutoObservable(this);
    this.id = id;
    this.quadrant = quadrant;
  }

  updateTask(newTask) {
    this.task = newTask;
  }

  completeTodo(newStatus) {
    this.completed = newStatus;
  }
}

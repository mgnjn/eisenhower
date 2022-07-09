import { makeAutoObservable, makeObservable, observable } from "mobx";

export class TodosStore {
  todos = [];
  quadrant;
  label;

  constructor(quadrant, label) {
    makeObservable(this, { todos: observable });
    this.quadrant = quadrant;
    this.label = label;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }
}

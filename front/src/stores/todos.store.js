import { makeAutoObservable } from "mobx";
import { QUADRANTS } from "../utils/constants";

export class TodosStore {
  todos = {};
  isStandard = true;

  constructor() {
    makeAutoObservable(this);

    // umm. ew
    this.todos[QUADRANTS.q0] = [];
    this.todos[QUADRANTS.q1] = [];
    this.todos[QUADRANTS.q2] = [];
    this.todos[QUADRANTS.q3] = [];
    this.todos[QUADRANTS.q4] = [];
  }

  switchStandard() {
    this.isStandard = !this.isStandard;
  }

  addTodo(quadrant, todo) {
    this.todos[quadrant].push(todo);
  }

  completeTodo(quadrant, id) {
    this.todos[quadrant] = Object.assign(
      [],
      this.todos[quadrant].map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  deleteTodo(quadrant, id) {
    this.todos[quadrant] = this.todos[quadrant].filter(
      (todo) => todo.id !== id
    );
  }
}

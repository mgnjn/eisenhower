import { makeAutoObservable, makeObservable, observable } from "mobx";
import { MODES } from "../utils/constants";

export class Mode {
  activeMode;

  constructor(mode) {
    makeAutoObservable(this);
    this.activeMode = MODES.todoMode;
  }

  setActiveMode(newActiveMode) {
    this.activeMode = newActiveMode;
  }

  setTodoMode() {
    this.activeMode = MODES.todoMode;
  }

  setStickyMode() {
    this.activeMode = MODES.stickyMode;
  }

  setLofiMode() {
    this.activeMode = MODES.lofiMode;
  }
}

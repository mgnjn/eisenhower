import { makeAutoObservable, makeObservable, observable } from "mobx";
import { MODES } from "../utils/constants";

export class ModeStore {
  activeMode = MODES.todoMode;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveMode(newActiveMode) {
    this.activeMode = newActiveMode;
  }

  setToTodoMode() {
    this.activeMode = MODES.todoMode;
  }

  setToStickyMode() {
    this.activeMode = MODES.stickyMode;
  }

  setToLofiMode() {
    this.activeMode = MODES.lofiMode;
  }
}

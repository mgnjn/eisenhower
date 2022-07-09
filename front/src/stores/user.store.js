import { makeAutoObservable } from "mobx";
import { ModeStore } from "./mode.store";
import { createContext, useContext } from "react";
import { TodosStore } from "./todos.store";

export class UserStore {
  modeStore;
  todosStore;

  constructor() {
    makeAutoObservable(this);

    this.modeStore = new ModeStore();
    this.todosStore = new TodosStore();
  }
}

export const createUserStore = () => new UserStore();
export const userStore = createUserStore();

const UserStoreContext = createContext(userStore);
export const UserStoreProvider = UserStoreContext.Provider;

export const useUserStore = () => {
  const store = useContext(UserStoreContext);

  return store;
};

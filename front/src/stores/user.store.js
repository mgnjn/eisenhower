import { makeAutoObservable } from "mobx";
import { ModeStore } from "./mode.store";
import { TodosStore } from "./todos.store";
import { createContext, useContext } from "react";

export class UserStore {
  modeStore;

  constructor() {
    makeAutoObservable(this);

    this.modeStore = new ModeStore();
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

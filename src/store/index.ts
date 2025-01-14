import { createContext, useContext } from 'react';
import AppStore from './app';

export interface Stores {
  app: AppStore;
}

export const app = new AppStore();

const storeContext = createContext<Stores>({
  app,
});

export function useStores() {
  return useContext<Stores>(storeContext);
}

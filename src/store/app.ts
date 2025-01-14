import { makeAutoObservable } from 'mobx';

export interface AppType {
  /** 初始化列表 */
  list: number[];
}

class App implements AppType {
  list: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  initAppointAll() {
    this.list = [1, 2, 3];
  }

  model(): AppType {
    return {
      list: this.list,
    };
  }
}

export default App;

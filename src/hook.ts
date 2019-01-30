import Pool from './pool';
import Action from './action';
import Filter from './filter';

export default class Hook {
  public name: string = '';
  protected actionPool: { [name: string]: Pool } = {};

  public constructor(name: string) {
    this.name = name;
  }

  // for party-B
  public addAction(name: string, callback: any, priority: number): Action {
    if (!this.actionPool[name]) {
      this.actionPool[name] = new Pool();
    }
    const action = new Action(name, callback, priority);
    this.actionPool[name].add(action);
    return action;
  }

  // for party-A
  public doAction(name: string, ...args: any): void {
    if (!this.actionPool[name]) {
      return;
    }
    this.actionPool[name].each((action: Action, index: number): void => {
      action.do(...args);
    });
  }
}
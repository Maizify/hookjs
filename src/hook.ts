import Pool from './pool';
import Action from './action';

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
  public doAction(name: string): void {
    
  }
}
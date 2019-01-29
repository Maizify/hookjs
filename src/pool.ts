import Action from './action';

type PoolItem = Action;

export default class Pool {
  protected list: PoolItem[] = [];

  public add(item: PoolItem): void {
    this.list.push(item);
    this.list.sort((a: PoolItem, b: PoolItem): number => {
      return a.priority - b.priority;
    });
  }
}
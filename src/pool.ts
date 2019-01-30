import Hookable from './hookable';

type PoolItem = Hookable;

export default class Pool {
  protected list: PoolItem[] = [];

  public add(item: PoolItem): void {
    this.list.push(item);
    this.list.sort((a: PoolItem, b: PoolItem): number => {
      return a.priority - b.priority;
    });
  }

  public each(cb: (item: PoolItem, index: number) => void): void {
    this.list.forEach(cb);
  }
}
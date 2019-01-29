import Hookable from './hookable';

export default class Action implements Hookable {
  public id: string = Math.random().toString(36).substring(2, 12);
  public name: string = '';
  public priority: number = 10;
  public callback: any;

  constructor(name: string, callback: any, priority: number) {
    this.name = name;
    this.callback = callback;
    this.priority = priority;
  }
}
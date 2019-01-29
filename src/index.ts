import Hook from './hook';

export default class HookFactory {
  protected static hookMap: { [name: string]: Hook } = {};

  constructor(name: string) {
    if (HookFactory.hookMap[name]) {
      return HookFactory.hookMap[name];
    }
    return HookFactory.hookMap[name] = new Hook(name);
  }
};
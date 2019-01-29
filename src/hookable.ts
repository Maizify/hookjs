export default interface Hookable {
  readonly id: string;
  name: string;
  priority: number;
  callback: any;
}
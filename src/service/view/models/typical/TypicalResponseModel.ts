export class TypicalResponseModel {
  constructor(public readonly name: string) {}

  result(): string {
    return this.name;
  }
}

export class User {
  constructor(private readonly name: UserName) {}
}

export class UserName {
  constructor(readonly value: string) {}
}

export class UserId {
  constructor(readonly value: number) {}
}

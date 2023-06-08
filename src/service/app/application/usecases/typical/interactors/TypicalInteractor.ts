import { TypicalOutputBoundary } from "../outputBoundary/TypicalOutputBoundary";
import { TypicalInputBoundary } from "../inputBoundary/TypicalInputBoundary";
import { TypicalOutputData } from "../outputBoundary/TypicalOutputData";
import { UserRepository } from "../../../domain/models/UserRepository";
import { UserId } from "../../../domain/models/User";

export class TypicalInteractor implements TypicalInputBoundary {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly outputPort: TypicalOutputBoundary
  ) {}

  async handle(id: UserId): Promise<void> {
    const user = await this.userRepository.findById(id.value);

    if (!user) {
      throw new Error("User not found");
    }

    this.outputPort.handle(new TypicalOutputData(user.name));
  }
}

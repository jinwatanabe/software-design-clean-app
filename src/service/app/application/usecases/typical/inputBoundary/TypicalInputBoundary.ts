import { UserId } from "../../../domain/models/User";

export interface TypicalInputBoundary {
  handle(id: UserId): void;
}

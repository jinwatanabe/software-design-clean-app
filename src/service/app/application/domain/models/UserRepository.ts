import { UserJson } from "../../../infrastructure/JPUserRepository";

export interface UserRepository {
  findById(id: number): Promise<UserJson>;
}

import { UserEntity } from "../../entities/user/UserEntity";

export abstract class UserRepository {
  async addUser(newUser: UserEntity) {
    throw new Error("Method not implemented.");
  }

  async getUserByUsername(username: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
}

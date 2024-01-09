import { UserEntity } from "../../entities/user/UserEntity";

export abstract class UserRepository {
  async addUser(newUser: UserEntity) {
    throw new Error("Method not implemented.");
  }

  async getUserByUsername(
    username: string,
    isOrderPopulated: boolean = false
  ): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
}

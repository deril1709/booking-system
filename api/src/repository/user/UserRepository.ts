import { UserEntity } from "../../entities/user/UserEntity";

export abstract class UserRepository {
  async deleteUserById(userId: string) {
    throw new Error("Method not implemented.");
  }

  async getUserById(userId: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }

  async getAllUsers(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }

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

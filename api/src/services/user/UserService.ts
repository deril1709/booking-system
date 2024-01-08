import { UserEntity } from "../../entities/user/UserEntity";
import { UserRepository } from "../../repository/user/UserRepository";
import { IPostUserPayload } from "../../utils/interfaces/IPostUserPayload";

export abstract class UserService {
  protected userRepository: UserRepository;

  constructor(repository: { userRepository: UserRepository }) {
    this.userRepository = repository.userRepository;
  }

  async addNewUserAdmin(payload: IPostUserPayload) {
    throw new Error("Method not implemented.");
  }

  async addNewUser(payload: IPostUserPayload) {
    throw new Error("Method not implemented.");
  }

  async getUserByUsername(username: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
}

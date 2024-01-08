import { NotFoundError } from "../../Exceptions/http/NotFoundError";
import { HashAbstract } from "../../config/crypto/HashAbstract";
import { UserEntity } from "../../entities/user/UserEntity";
import { UserRepository } from "../../repository/user/UserRepository";
import { ERRORCODE, ROLE } from "../../utils";
import { IPostUserPayload } from "../../utils/interfaces/IPostUserPayload";
import { UserService } from "./UserService";

export class UserServiceImpl extends UserService {
  private hashImpl: HashAbstract;

  constructor(
    repository: { userRepository: UserRepository },
    hashImpl: HashAbstract
  ) {
    super(repository);
    this.hashImpl = hashImpl;
  }

  async addNewUserAdmin(payload: IPostUserPayload): Promise<void> {
    const password = await this.hashImpl.hash(payload.password);

    const newUser = new UserEntity(payload.name, payload.email, ROLE.ADMIN);
    newUser.password = password;

    await this.userRepository.addUser(newUser);
  }

  async addNewUser(payload: IPostUserPayload): Promise<void> {
    const password = await this.hashImpl.hash(payload.password);

    const newUser = new UserEntity(payload.name, payload.email, ROLE.RENTEE);
    newUser.password = password;

    await this.userRepository.addUser(newUser);
  }

  async getUserByUsername(username: string): Promise<UserEntity> {
    const user = await this.userRepository.getUserByUsername(username);

    if (!user) {
      throw new NotFoundError(
        ERRORCODE.USER_NOT_FOUND_ERROR,
        "user's not found"
      );
    }

    return user;
  }
}

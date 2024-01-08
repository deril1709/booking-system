import { BadRequestError } from "../../../Exceptions/http/BadRequestError";
import { UserEntity } from "../../../entities/user/UserEntity";
import { UserModel } from "../../../entities/user/mongoose/UserSchema";
import { ERRORCODE, ROLE } from "../../../utils";
import { UserRepository } from "../UserRepository";

export class UserRepositoryImpl extends UserRepository {
  async addUser(newUser: UserEntity): Promise<void> {
    try {
      const query = await UserModel.create([
        {
          email: newUser.email,
          name_: newUser.name,
          password: newUser.password,
          role: newUser.role,
        },
      ]);
    } catch (error) {
      throw new BadRequestError(
        ERRORCODE.UNIQUE_CONSTRAINT_ERROR,
        "user's been registered"
      );
    }
  }

  async getUserByUsername(username: string) {
    const userQuery = await UserModel.findOne({
      email: username,
    }).exec();

    if (!userQuery) {
      return null;
    }

    return new UserEntity(
      userQuery.name_ ?? "",
      userQuery.email ?? "",
      userQuery.role ?? ROLE.RENTEE,
      userQuery.password ?? "",
      userQuery.id
    );
  }
}

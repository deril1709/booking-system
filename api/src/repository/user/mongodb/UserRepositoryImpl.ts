import { BadRequestError } from "../../../Exceptions/http/BadRequestError";
import { OrderEntity } from "../../../entities/order/OrderEntity";
import { UserEntity } from "../../../entities/user/UserEntity";
import { UserModel } from "../../../entities/user/mongoose/UserSchema";
import { ERRORCODE, ROLE, orderSchemaToOrderEntity } from "../../../utils";
import { IOrderSchema } from "../../../utils/interfaces/schema/OrderSchema";
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

  async getUserByUsername(username: string, isOrderPopulated: boolean = false) {
    const query = UserModel.findOne({
      email: username,
    });
    let userQuery;
    let orders: OrderEntity[] = [];

    if (isOrderPopulated) {
      userQuery = await query.populate<{ orders: IOrderSchema[] }>("orders");
      orders = userQuery?.orders?.map(orderSchemaToOrderEntity) ?? [];
    } else {
      userQuery = await query;
    }

    if (!userQuery) {
      return null;
    }

    const user = new UserEntity(
      userQuery.name ?? "",
      userQuery.email ?? "",
      userQuery.role ?? ROLE.RENTEE,
      userQuery.password ?? "",
      userQuery.id
    );
    user.orders = orders;

    return user;
  }
}

import { isValidObjectId } from "mongoose";
import { BadRequestError } from "../../../Exceptions/http/BadRequestError";
import { FieldModel } from "../../../entities/field/mongoose/FieldSchema";
import { OrderEntity } from "../../../entities/order/OrderEntity";
import { OrderModel } from "../../../entities/order/mongoose/OrderSchema";
import { UserEntity } from "../../../entities/user/UserEntity";
import { UserModel } from "../../../entities/user/mongoose/UserSchema";
import { BOOKING_STATUS, ERRORCODE } from "../../../utils";
import { IOrderSchema } from "../../../utils/interfaces/schema/OrderSchema";
import { IUserSchema } from "../../../utils/interfaces/schema/UserSchema";
import { OrderRepository } from "../OrderRepository";
import { FieldEntity } from "../../../entities/field/FieldEntity";
import { IFieldSchema } from "../../../utils/interfaces/schema/FieldSchema";

export class OrderRepositoryImpl extends OrderRepository {
  async getOrdersByUserId(userId: string): Promise<OrderEntity[] | null> {
    if (!isValidObjectId(userId)) {
      return null;
    }

    const query = await OrderModel.find<IOrderSchema>({
      user: userId,
    }).populate<{
      user: IUserSchema;
    }>("user");

    const orders: OrderEntity[] = [];

    query.forEach((q) => {
      const order = new OrderEntity(
        q.user?.id.toString() ?? "",
        q.field.toString(),
        q.bookDate,
        q.duration,
        q.status,
        q.paymentProof
      );

      order.id = q.id.toString();
      order.createdAt = q.createdAt;
      order.updatedAt = q.updatedAt;

      // order.user = new UserEntity(
      //   q.user?.name_,
      //   q.user?.email,
      //   q.user?.role,
      //   q.user?.password,
      //   q.user?.id.toString() ?? ""
      // );

      orders.push(order);
    });

    return orders;
  }

  async getOrderById(
    orderId: string,
    isUserPopulated: boolean = false,
    isFieldPopulated: boolean = false
  ): Promise<OrderEntity | null> {
    if (!isValidObjectId(orderId)) {
      return null;
    }

    let query = OrderModel.findById<IOrderSchema>(orderId);
    let orderQuery;
    let user: UserEntity;
    let field: FieldEntity;

    if (isUserPopulated) {
      query = query.populate<{ orders: IUserSchema[] }>("user");
    }
    if (isFieldPopulated) {
      query = query.populate<{ orders: IFieldSchema[] }>("field");
    }

    orderQuery = await query;

    if (!orderQuery) {
      return null;
    }

    const order = new OrderEntity(
      orderQuery.user instanceof UserEntity
        ? orderQuery.user.id ?? ""
        : orderQuery.user.toString() ?? "",
      orderQuery.field instanceof FieldEntity
        ? orderQuery.field.id ?? ""
        : orderQuery.field.toString() ?? "",
      orderQuery.bookDate,
      orderQuery.duration,
      orderQuery.status,
      orderQuery.paymentProof
    );
    order.createdAt = orderQuery.createdAt;
    order.updatedAt = orderQuery.updatedAt;
    order.id = orderQuery.id.toString();

    return order;
  }

  async changeOrderStatusById(orderId: string, status: boolean): Promise<void> {
    try {
      const updated = await OrderModel.findByIdAndUpdate(orderId, {
        $set: {
          status: status ? BOOKING_STATUS.SUCCESS : BOOKING_STATUS.FAILED,
          updatedAt: new Date(),
        },
      });
    } catch (error: any) {
      console.log(error);

      throw new BadRequestError(ERRORCODE.BAD_REQUEST_ERROR, error.toString());
    }
  }

  async deleteOrderStatusById(orderId: string): Promise<void> {
    try {
      const updated = await OrderModel.findByIdAndDelete(orderId);
    } catch (error: any) {
      console.log(error);

      throw new BadRequestError(ERRORCODE.BAD_REQUEST_ERROR, error.toString());
    }
  }

  async getAllOrders(): Promise<OrderEntity[]> {
    const query = await OrderModel.find<IOrderSchema>().populate<{
      user: IUserSchema;
    }>("user");

    const orders: OrderEntity[] = [];

    query.forEach((q) => {
      const order = new OrderEntity(
        q.user?.id.toString() ?? "",
        q.field.toString(),
        q.bookDate,
        q.duration,
        q.status,
        q.paymentProof
      );

      order.id = q.id.toString();
      order.createdAt = q.createdAt;
      order.updatedAt = q.updatedAt;

      order.user = new UserEntity(
        q.user?.name_,
        q.user?.email,
        q.user?.role,
        q.user?.password,
        q.user?.id.toString() ?? ""
      );

      orders.push(order);
    });

    return orders;
  }

  async addOrder(newOrder: OrderEntity): Promise<any> {
    try {
      const user = await UserModel.findById(newOrder.userId);
      const field = await FieldModel.findById(newOrder.fieldId);

      const order = new OrderModel({
        bookDate: newOrder.bookDate,
        duration: newOrder.duration,
        paymentProof: newOrder.paymentProof,
        status: newOrder.status,
        field: newOrder.fieldId,
        user: newOrder.userId,
      });

      await order.save();

      user?.orders?.push(order.id);
      field?.orders?.push(order.id);

      await user?.save();
      await field?.save();
    } catch (error) {
      throw new BadRequestError(ERRORCODE.BAD_REQUEST_ERROR, "error");
    }
  }
}

import { BOOKING_STATUS } from "../..";
import { OrderEntity } from "../../../entities/order/OrderEntity";

interface IOrderListDTO {
  id: string;
  bookDate: number;
  duration: number;
  status: BOOKING_STATUS;
  createdAt: Date | string;
  updatedAt: Date | string;
  user: {
    name: string;
    id: string;
  };
}

export const orderListDTO = (order: OrderEntity) => {
  return {
    bookDate: order.bookDate,
    createdAt: order.createdAt,
    duration: order.duration,
    id: order.id,
    status: order.status,
    updatedAt: order.updatedAt,
    media: order.paymentProof,
    user: {
      id: order.user.id,
      name: order.user.name,
    },
  } as IOrderListDTO;
};

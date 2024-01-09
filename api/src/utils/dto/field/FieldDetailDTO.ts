import { BOOKING_STATUS } from "../..";
import { FieldEntity } from "../../../entities/field/FieldEntity";

interface IFieldDetailDTO {
  title: string;
  description?: string;
  priceHourly: number;
  photos?: string[];
  openingTime: number;
  closingTime: number;
  extraInfo?: string;
  address: string;
  id: string;
  orders: {
    id: string;
    bookDate: number;
    duration: number;
    status: BOOKING_STATUS;
    createdAt: Date | string;
    updatedAt: Date | string;
  }[];
}

export const fieldDetailDTO = (field: FieldEntity) => {
  return {
    title: field.title,
    description: field.description,
    priceHourly: field.priceHourly,
    photos: field.photos,
    address: field.address,
    closingTime: field.closingTime,
    id: field.id,
    openingTime: field.openingTime,
    extraInfo: field.extraInfo,
    orders: field.orders?.map((order) => ({
      bookDate: order.bookDate,
      createdAt: order.createdAt,
      duration: order.duration,
      id: order.id,
      status: order.status,
      updatedAt: order.updatedAt,
    })),
  } as IFieldDetailDTO;
};

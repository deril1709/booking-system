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
  } as IFieldDetailDTO;
};

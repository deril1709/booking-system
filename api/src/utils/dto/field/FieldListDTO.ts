import { FieldEntity } from "../../../entities/field/FieldEntity";

interface IFieldListDTO {
  title: string;
  description?: string;
  priceHourly: number;
  photos?: string[];
  id: string;
}

export const fieldListDTO = (field: FieldEntity) => {
  return {
    title: field.title,
    description: field.description,
    priceHourly: field.priceHourly,
    photos: field.photos,
    id: field.id,
  } as IFieldListDTO;
};

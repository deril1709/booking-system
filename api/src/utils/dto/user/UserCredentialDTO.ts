import { ROLE } from "../..";
import { UserEntity } from "../../../entities/user/UserEntity";

interface IUserCredentialDTO {
  email: string;
  name: string;
  role: ROLE | string;
}

export const userCredentialDTO = (user: UserEntity) => {
  return {
    email: user.email,
    name: user.name,
    role: user.role,
  } as IUserCredentialDTO;
};

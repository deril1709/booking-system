import { ITokenPayload } from "../../utils/interfaces/ITokenPayload";

export abstract class AuthService {
  async generateToken(
    tokenPayload: ITokenPayload
  ): Promise<{ accessToken: string | undefined }> {
    throw new Error("Method not implemented.");
  }
}

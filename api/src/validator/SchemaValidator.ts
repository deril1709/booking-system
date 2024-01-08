interface IValidateProps {
  schema: any;
  payload: any;
}

export abstract class SchemaValidator {
  abstract validate(props: IValidateProps): boolean;
}

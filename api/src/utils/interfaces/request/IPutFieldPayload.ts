export interface IPutFieldPayload {
  readonly title?: string;
  readonly address?: string;
  readonly photos?: string[];
  readonly description?: string;
  readonly extraInfo?: string;
  readonly openingTime?: number;
  readonly closingTime?: number;
  readonly priceHourly?: number;
}

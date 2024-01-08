export class FieldEntity {
  private _title!: string;
  private _address!: string;
  private _photos!: string[];
  private _description?: string | undefined;
  private _extraInfo?: string | undefined;
  private _openingTime!: number;
  private _closingTime!: number;
  private _id!: string;
  private _priceHourly!: number;

  constructor(
    title: string,
    address: string,
    openingTime: number,
    closingTime: number,
    priceHourly: number,
    description?: string,
    extraInfo?: string
  ) {
    this.title = title;
    this.address = address;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.description = description;
    this.extraInfo = extraInfo;
    this.priceHourly = priceHourly;
  }

  public get priceHourly(): number {
    return this._priceHourly;
  }
  public set priceHourly(value: number) {
    this._priceHourly = value;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }

  public get photos(): string[] {
    return this._photos;
  }

  public set photos(value: string[]) {
    this._photos = value;
  }

  public get description(): string | undefined {
    return this._description;
  }

  public set description(value: string | undefined) {
    this._description = value;
  }

  public get extraInfo(): string | undefined {
    return this._extraInfo;
  }

  public set extraInfo(value: string | undefined) {
    this._extraInfo = value;
  }

  public get openingTime(): number {
    return this._openingTime;
  }

  public set openingTime(value: number) {
    this._openingTime = value;
  }

  public get closingTime(): number {
    return this._closingTime;
  }

  public set closingTime(value: number) {
    this._closingTime = value;
  }
}

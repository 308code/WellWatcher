
export class WellReportModel {
  constructor(private _id: string = "", private _apiNumber: string = "", private _permitNumber: string="",
              private _wellNameAndNumber: string = "",
              private _countyName: string = "", private _townshipName: string = "",
              private _oilTotal: number=0, private _gasTotal: number=0, private _brineTotal: number=0) {}

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get apiNumber(): string {
    return this._apiNumber;
  }

  set apiNumber(value: string) {
    this._apiNumber = value;
  }

  get permitNumber(): string {
    return this._permitNumber;
  }

  set permitNumber(value: string) {
    this._permitNumber = value;
  }

  get wellNameAndNumber(): string {
    return this._wellNameAndNumber;
  }

  set wellNameAndNumber(value: string) {
    this._wellNameAndNumber = value;
  }

  get countyName(): string {
    return this._countyName;
  }

  set countyName(value: string) {
    this._countyName = value;
  }

  get townshipName(): string {
    return this._townshipName;
  }

  set townshipName(value: string) {
    this._townshipName = value;
  }

  get oilTotal(): number {
    return this._oilTotal;
  }

  set oilTotal(value: number) {
    this._oilTotal = value;
  }

  get gasTotal(): number {
    return this._gasTotal;
  }

  set gasTotal(value: number) {
    this._gasTotal = value;
  }

  get brineTotal(): number {
    return this._brineTotal;
  }

  set brineTotal(value: number) {
    this._brineTotal = value;
  }
}

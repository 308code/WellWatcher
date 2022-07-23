import {Production} from "./production.model";

export class Well {
  constructor(private id: string = "", private permitNumber: string="",
              private wellName: string = "", private wellNumber: string = "1",
              private countyName: string = "cn", private townshipName: string = "tn",
              private dateProduced: Date = new Date(), private production: Production[]) {}

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getPermitNumber(): string {
    return this.permitNumber;
  }

  public setPermitNumber(value: string) {
    this.permitNumber = value;
  }

  public getWellName(): string {
    return this.wellName;
  }

  public setWellName(value: string) {
    this.wellName = value;
  }

  public getWellNumber(): string {
    return this.wellNumber;
  }

  public setWellNumber(value: string) {
    this.wellNumber = value;
  }

  public getCountyName(): string {
    return this.countyName;
  }

  public setCountyName(value: string) {
    this.countyName = value;
  }

  public getTownshipName(): string {
    return this.townshipName;
  }

  public setTownshipName(value: string) {
    this.townshipName = value;
  }

  public getDateProduced(): Date {
    if(this.getDateProduced())
      return this.dateProduced;
    else{
      return new Date();
    }
  }

  public setDateProduced(value: Date) {
    this.dateProduced = value;
  }

  public getProduction(){
    return this.production;
  }

  public setProduction(value: Production[]){
    this.production = value;
  }
}

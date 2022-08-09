
import {ProductionClass} from "./productionClass.model";

export class WellClass {
  constructor(private id: string = "", private apiNumber: string = "", private permitNumber: string="",
              private wellName: string = "", private wellNumber: string = "",
              private countyName: string = "", private townshipName: string = "",
              private production: ProductionClass[]) {}

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getApiNumber(): string {
    return this.apiNumber;
  }

  public setApiNumber(value: string) {
    this.apiNumber = value;
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

  public getProduction(){
    return this.production;
  }

  public setProduction(value: ProductionClass[]){
    this.production = value;
  }
}

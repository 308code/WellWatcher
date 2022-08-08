export class ProductionClass {
  constructor(private type: string ="", private quantity: number = 0, private payedDate: Date = new Date()){}

  public getType() : string{
    return this.type;
  }

  public setType(value: string){
    this.type = value;
  }
  public getQuantity() : number{
    return this.quantity;
  }

  public setQuantity(value: number){
    this.quantity = value;
  }

  public getPayedDate() : Date{
    return this.payedDate;
  }

  public setPayedDate(value: Date){
    if(value) {
      this.payedDate = value;
    }
    else{
      this.payedDate = new Date();
    }
  }
}

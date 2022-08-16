import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WellClass} from "../model/WellClass";
import {ProductionClass} from "../model/productionClass.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WellDaoService{

  constructor(private http: HttpClient) {

  }

  public getAllWells(): Observable<any>{
    const url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells';
    return this.http.get(url);
  }

  // public getAllWells(): Observable<WellClass[]>{
  //   const url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells';
  //   return this.http.get<Well[]>(url)
  //     .pipe(map(responseData => {
  //       let wells: WellClass[] = [];
  //       responseData.forEach( well => {
  //         wells.push(new WellClass(well.id,well.apiNumber,well.permitNumber,well.wellName,well.wellNumber,well.countyName,
  //           well.townshipName,well.production));
  //       });
  //       console.log("pipe wells = " +  JSON.stringify(wells));
  //       return wells;
  //     }));
  // }



  public getWell(id: string):WellClass{
    let wells : WellClass[] = [];
    this.getAllWells().subscribe(w => {
      wells = w;
    });
    let well : WellClass = wells[0];
    for(let value of wells){
      if(value.getId() === id){
        well = value;
        break;
      }
    }
    return well;
  }

  public insertProduction(id: string, type: string, quantity: number, dateProduced: any){
    const indexPos = this.getWellIndex(id);
    let wells : WellClass[] = [];
    this.getAllWells().subscribe(w => {
      wells = w;
    });
    if(indexPos >= 0){
       wells[indexPos].getProduction().push(new ProductionClass(type,quantity,dateProduced))
    }
  }

  private getWellIndex(id: string): number {
    let wells : WellClass[] = [];
    this.getAllWells().subscribe(w => {
      wells = w;
    });
    for (let i = 0; i < wells.length; i++) {
      if (id === wells[i].getId()) {
        return i;
      }
    }
    return -1;
  }

  public deleteProduction(id: string, position: number) : void{
    let wells : WellClass[] = [];
    this.getAllWells().subscribe(w => {
      wells = w;
    });
    console.log("index = " + this.getWellIndex(id));
    let well: WellClass = wells[this.getWellIndex(id)];
    console.log("id = " + id);
    console.log("position = " + position);
    console.log(("well = " + JSON.stringify(well)));
    console.log("wells = " + JSON.stringify(wells));
    well.getProduction().splice(position,1);
  }
}

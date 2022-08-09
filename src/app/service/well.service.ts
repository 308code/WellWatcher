import { Injectable } from '@angular/core';
import {WellDaoService} from "../dao/well-dao.service";
import {Well} from "../model/well.model";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {WellClass} from "../model/WellClass";
import {ProductionClass} from "../model/productionClass.model";

@Injectable({
  providedIn: 'root'
})
export class WellService {
  constructor(private wellDaoService: WellDaoService, private http: HttpClient) {}

  getAllWells(): Observable<WellClass[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells';
    let production: ProductionClass[] = [];
    return this.http.get<Well[]>(url)
      .pipe(map(responseData => {
        let wells: WellClass[] = [];
        responseData.forEach( well => {
          production = [];
          well.production.forEach( prod => {
            console.log(well.wellName + ' ' + well.wellNumber + ':' + prod.payedDate);
            production.push(new ProductionClass(prod.type,prod.quantity,prod.payedDate));
          });
          wells.push(new WellClass(well.id,well.apiNumber,well.permitNumber,well.wellName,well.wellNumber,well.county,
            well.township,production));

        });
        return wells;
      }));
  }

  public getWell(id: string): Observable<WellClass>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/' + id;
    return this.http.get<Well>(url)
      .pipe(map(responseData => {
        let production: ProductionClass[] = [];
        responseData.production.forEach( prod => {
          production.push(new ProductionClass(prod.type,prod.quantity,prod.payedDate));
        })
          return new WellClass(responseData.id,responseData.apiNumber, responseData.permitNumber, responseData.wellName,
            responseData.wellNumber, responseData.county, responseData.township, production);
      }));
  }

  public insertProduction(id: string, type: string, quantity: number, dateProduced: any): void{
    this.wellDaoService.insertProduction(id, type,quantity,dateProduced);
  }

  public deleteProduction(id: string, position: number){
    this.wellDaoService.deleteProduction(id, position);
  }
}

import { Injectable } from '@angular/core';
import {WellDaoService} from "../dao/well-dao.service";
import {Well} from "../model/well.model";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {WellClass} from "../model/WellClass";

@Injectable({
  providedIn: 'root'
})
export class WellService {
  constructor(private wellDaoService: WellDaoService, private http: HttpClient) {}

  getAllWells(): Observable<WellClass[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells';
    return this.http.get<Well[]>(url)
      .pipe(map(responseData => {
        let wells: WellClass[] = [];
        responseData.forEach( well => {
          wells.push(new WellClass(well.id,well.apiNumber,well.permitNumber,well.wellName,well.wellNumber,well.county,
            well.township,well.production));
        });
        return wells;
      }));
  }

  public getWell(id: string): Observable<WellClass>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/' + id;
    return this.http.get<Well>(url)
      .pipe(map(responseData => {
          return new WellClass(responseData.id,responseData.apiNumber, responseData.permitNumber, responseData.wellName,
            responseData.wellNumber, responseData.county, responseData.township, responseData.production);
      }));
  }

  public insertProduction(id: string, type: string, quantity: number, dateProduced: any): void{
    this.wellDaoService.insertProduction(id, type,quantity,dateProduced);
  }

  public deleteProduction(id: string, position: number){
    this.wellDaoService.deleteProduction(id, position);
  }
}

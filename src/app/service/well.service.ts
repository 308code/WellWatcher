import { Injectable } from '@angular/core';
import {WellDaoService} from "../dao/well-dao.service";
import {Well} from "../model/well.model";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {WellClass} from "../model/WellClass";
import {ProductionClass} from "../model/productionClass.model";
import {WellReportModel} from "../model/wellReport.model";

@Injectable({
  providedIn: 'root'
})
export class WellService {
  constructor(private wellDaoService: WellDaoService, private http: HttpClient) {}

  getAllWellsByLatestProductionDate(): Observable<WellClass[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/recent-production';
    let production: ProductionClass[] = [];
    return this.http.get<Well[]>(url)
      .pipe(map(responseData => {
        let wells: WellClass[] = [];
        responseData.forEach( well => {
          production = [];
          well.production.forEach( prod => {
            production.push(new ProductionClass(prod.type,prod.quantity,prod.payedDate));
          });
          wells.push(new WellClass(well.id,well.apiNumber,well.permitNumber,well.wellName,well.wellNumber,well.countyName,
            well.townshipName,production));

        });
        return wells;
      }));
  }

  getAllWells(): Observable<WellClass[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells';
    let production: ProductionClass[] = [];
    return this.http.get<Well[]>(url)
      .pipe(map(responseData => {
        let wells: WellClass[] = [];
        responseData.forEach( well => {
          production = [];
          well.production.forEach( prod => {
            production.push(new ProductionClass(prod.type,prod.quantity,prod.payedDate));
          });
          wells.push(new WellClass(well.id,well.apiNumber,well.permitNumber,well.wellName,well.wellNumber,well.countyName,
            well.townshipName,production));

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
            responseData.wellNumber, responseData.countyName, responseData.townshipName, production);
      }));
  }

  public deleteProduction(id: string, position: number): void{

      this.getWell(id).subscribe( well => {
        let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/';
        well.getProduction().splice(position,1);
        this.http.put(url,well).subscribe(() => {
          console.log("put was successful!")
        }, () => {
          console.log("put failed!")
        })
      },() => {
        console.log("Failed getting the well with id: " + id + " in the deleteProduction method.");
      });
  }

  public deleteWell(id: String){
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/' + id;
    return this.http.delete(url);
  }

  public updateWell(well: WellClass){
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/';
    return this.http.put(url,well);
  }

  public insertWell(well: WellClass){
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/';
    return this.http.post(url,well, {responseType: "text"});
  }

  public generateReport(from: Date, to: Date) : Observable<WellReportModel[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/reports/' +
      from.toISOString().slice(0,10) + "/" + to.toISOString().slice(0,10);
    let reportResult: WellReportModel[] = [];
    return this.http.get<WellReportModel[]>(url)
      .pipe(map(responseData => {
        responseData.forEach( wellReportEntry => {
          reportResult.push(new WellReportModel(wellReportEntry.id,wellReportEntry.apiNumber,wellReportEntry.permitNumber,
            wellReportEntry.wellNameAndNumber,wellReportEntry.countyName,wellReportEntry.townshipName,wellReportEntry.oilTotal,
            wellReportEntry.gasTotal,wellReportEntry.brineTotal));
        });
        return reportResult;
      }));
  }
}

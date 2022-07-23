import { Injectable } from '@angular/core';
import {WellDaoService} from "../dao/well-dao.service";
import {Well} from "../model/well.model";

@Injectable({
  providedIn: 'root'
})
export class WellService {
  constructor(private wellDaoService: WellDaoService) {}

  public getWells(fromDate: Date, toDate: Date){
    return this.wellDaoService.wells;
  }

  public getWell(id: string){
    return this.wellDaoService.getWell(id);
  }

  public insertProduction(id: string, type: string, quantity: number, dateProduced: any): void{
    this.wellDaoService.insertProduction(id, type,quantity,dateProduced);
  }
}

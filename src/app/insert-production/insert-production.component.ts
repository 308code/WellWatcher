import { Component, OnInit } from '@angular/core';
import {WellDaoService} from "../dao/well-dao.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Well} from "../model/well.model";
import {Production} from "../model/production.model";
import {WellService} from "../service/well.service";

@Component({
  selector: 'app-insert-production',
  templateUrl: './insert-production.component.html',
  styleUrls: ['./insert-production.component.css']
})
export class InsertProductionComponent implements OnInit {
  today: Date = new Date();
  wells : Well[] = [];
  well: Well = new Well("","","","","","",
    new Date(),new Array(new Production("",0,new Date())));

  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.well = this.wellService.getWell(this.route.snapshot.params['id']);
    this.wells = this.wellService.getWells(new Date(),new Date());
  }

  insertProduction(id: string, type: string, quantity: number, dateProduced: any): void{
    this.wellService.insertProduction(id,type,quantity,dateProduced);
  }

  switchWell(selectedWell: string): void{
    this.well = this.wellService.getWell(selectedWell);
  }
}

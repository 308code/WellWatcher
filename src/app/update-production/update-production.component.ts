import { Component, OnInit } from '@angular/core';
import {WellService} from "../service/well.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WellClass} from "../model/WellClass";
import {ProductionClass} from "../model/productionClass.model";

@Component({
  selector: 'app-update-production',
  templateUrl: './update-production.component.html',
  styleUrls: ['./update-production.component.css']
})
export class UpdateProductionComponent implements OnInit {
  today = new Date();
  position : number = -1;
  well : WellClass = new WellClass("","","","","","","",[]);
  production: ProductionClass = new ProductionClass("",0,new Date());

  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router ) {
    this.today.toLocaleString('en-US', { timeZone: 'America/New_York' });
  }

  ngOnInit(): void {
    this.wellService.getWell(this.route.snapshot.params['id']).subscribe(well => {
      this.position = this.route.snapshot.params['pos'];
      this.well = well;
      if(this.position != -1){
        this.production = well.getProduction()[this.position];
      }
    });
  }

  updateProduction(id: string, type: string, quantity: number, dateProduced: Date){
    this.well.getProduction()[this.position].setType(type);
    this.well.getProduction()[this.position].setQuantity(quantity);
    this.well.getProduction()[this.position].setPayedDate(dateProduced);
    this.wellService.updateWell(this.well).subscribe(() => {
      this.router.navigate(['/','production']).then(() =>{
        console.log("Successful in update of production!");
      })
    });
  }
}

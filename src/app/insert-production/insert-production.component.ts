import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WellService} from "../service/well.service";
import {WellClass} from "../model/WellClass";

@Component({
  selector: 'app-insert-production',
  templateUrl: './insert-production.component.html',
  styleUrls: ['./insert-production.component.css']
})
export class InsertProductionComponent implements OnInit {
  today: Date = new Date();
  wells : WellClass[] = [];
  well: WellClass = new WellClass("","","","","","","",
    new Array());

  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']) {
      // this.well = this.wellService.getWell(this.route.snapshot.params['id']);
    }else{
      // this.well = this.wellService.getWell("623914f9ace85f24167de3fe");
    }
    this.wellService.getAllWells().subscribe(wells => {
      this.wells = wells;
    });
  }

  insertProduction(id: string, type: string, quantity: number, dateProduced: Date | null): void{
    this.wellService.insertProduction(id,type,quantity,dateProduced);
    console.log("WellWatcher ==> Added production for id: " + id + " type: " + type +
      " quantity: " + quantity + " date: " + dateProduced?.toISOString().slice(0,10))
    this.router.navigate(['/']).then(() => {
      console.log("SUCCESS: navigating to home page from insertProduction page.");
    }, () => {
      console.log("ERROR: navigating to home page from insertProduction page.");
    });
  }

  switchWell(selectedWell: string): void{
    // this.well = this.wellService.getWell(selectedWell);
  }
}

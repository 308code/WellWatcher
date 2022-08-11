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
    []);

  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router) {
    this.today.toLocaleString('en-US', { timeZone: 'America/New_York' });
  }

  ngOnInit(): void {
    if(this.wells.length == 0) {
      this.wellService.getAllWells().subscribe(wells => {
        this.wells = wells;
      });
    }
    if(this.route.snapshot.params['id']) {
       this.wellService.getWell(this.route.snapshot.params['id']).subscribe( well =>{
         this.well = well;
       });
    }else{
       this.wellService.getWell("623914f9ace85f24167de3fe").subscribe( well =>{
         this.well = well;
       });
    }
  }

  insertProduction(id: string, type: string, quantity: number, dateProduced: Date | null): void{
    this.wellService.insertProduction(id,type,quantity,dateProduced);
    this.router.navigate(['/']).then(() => {
      console.log("SUCCESS: navigating to home page from insertProduction page.");
    }, () => {
      console.log("ERROR: navigating to home page from insertProduction page.");
    });
  }

  switchWell(selectedWell: string): void{
     this.wellService.getWell(selectedWell).subscribe( well =>{
       this.well = well;
     });
  }
}

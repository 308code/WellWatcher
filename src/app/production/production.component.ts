import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {WellService} from "../service/well.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WellClass} from "../model/WellClass";

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  @ViewChildren('radioSelection') radioSelections: QueryList<any> | undefined;
  today: Date = new Date();
  wells : WellClass[] = [];
  well: WellClass = new WellClass("","","","","",
    "","",new Array());

  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.wellService.getAllWells();
    this.well = this.wells[0];
  }

  switchWell(selectedWell: string): void{
    // this.well = this.wellService.getWell(selectedWell);
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

  deleteProduction(position: number) : void{
    this.wellService.deleteProduction(this.well.getId(), position);
  }

  getSelectedPosition(): number{
    let result = -1;
    this.radioSelections?.forEach((radioSelection: ElementRef, index: number) => {
      if(radioSelection.nativeElement.checked){
        result = index;
      }
    });
    console.log("result = " + result);
    return result;
  }
}

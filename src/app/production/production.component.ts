import {Component, OnInit} from '@angular/core';
import {WellService} from "../service/well.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WellClass} from "../model/WellClass";

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  today: Date = new Date();
  wells : WellClass[] = [];
  well: WellClass = new WellClass("","","","","",
    "","",[]);

  selectedIndex : number = -1;

  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.wellService.getAllWells().subscribe(wells => {
      this.wells = wells;
      this.well = wells[0];
    });
  }

  switchWell(selectedWell: string): void{
    this.wellService.getWell(selectedWell).subscribe(well =>{
      this.well = well;
      this.selectedIndex = -1;
    });
  }

  deleteProduction(position: number) : void{
    this.wellService.deleteProduction(this.well.getId(), position);
    this.wellService.getAllWells().subscribe(wells => {
      this.wells = wells;
      this.well = wells[0];
    });
  }

  updateProduction(id: string, position: number){
    this.router.navigate(['/production', id, position]).then(() => {
    });
  }

  updateSelected(pos: number): void{
    this.selectedIndex = pos;
  }
}

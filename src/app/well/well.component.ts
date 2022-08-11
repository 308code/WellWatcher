import { Component, OnInit } from '@angular/core';
import {WellService} from "../service/well.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WellClass} from "../model/WellClass";

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  well : WellClass = new WellClass("","","","","","","", Array());
  constructor(private wellService: WellService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.wellService.getWell(this.route.snapshot.params['id']).subscribe(well => {
      this.well = well;
    });
  }

  updateWell(id: string, wellName: string, wellNumber: string, countyName: string, townshipName: string){
      this.well.setWellName(wellName);
      this.well.setWellNumber(wellNumber);
      this.well.setCountyName(countyName);
      this.well.setTownshipName(townshipName);
      this.wellService.updateWell(this.well).subscribe(() =>{
        this.router.navigate(['/wells']).then(() => {
          console.log("SUCCESS: navigating to home page from insertProduction page.");
        }, () => {
          console.log("ERROR: navigating to home page from insertProduction page.");
        });
      },() => {
        console.log("ERROR: navigating to home page from insertProduction page.");
      });
  }

  deleteWell(id: String){
    this.wellService.deleteWell(id).subscribe(() => {
      this.router.navigate(['/wells']).then(() => {
        console.log("SUCCESS: navigating to home page from insertProduction page.");
      }, () => {
        console.log("ERROR: navigating to home page from insertProduction page.");
      });
    },() => {
      console.log("ERROR: navigating to home page from insertProduction page.");
    });
  }
}

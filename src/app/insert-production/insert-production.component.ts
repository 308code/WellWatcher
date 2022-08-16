import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WellService} from "../service/well.service";
import {WellClass} from "../model/WellClass";
import {ProductionClass} from "../model/productionClass.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

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

  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
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

  // insertProduction(id: string, type: string, quantity: number, dateProduced: Date | null): void{
  //   this.wellService.insertProduction(id,type,quantity,dateProduced);
  //   this.router.navigate(['/']).then(() => {
  //     console.log("SUCCESS: navigating to home page from insertProduction page.");
  //   }, () => {
  //     console.log("ERROR: navigating to home page from insertProduction page.");
  //   });
  // }

  insertProduction(id: string, type: string, quantity: number, dateProduced: any): void{
    //this.wellService.insertProduction(id,type,quantity,dateProduced);
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/wells/';
    this.wellService.getWell(id).subscribe(well => {
      this.well = well;
      this.well.getProduction().push(new ProductionClass(type,quantity,dateProduced));
      this.http.put(url,this.well).subscribe(()=> {
          console.log("Success in adding a production!");
          this.router.navigate(['/']).then(() => {
            console.log("SUCCESS: navigating to home page from insertProduction page.");
          }, () => {
            console.log("ERROR: navigating to home page from insertProduction page.");
          });
        },
        () => {
          console.log("Error in adding a production!");
        }
      );
    }, () => {
      console.log("Error in adding a production!");
    });
  }


  switchWell(selectedWell: string): void{
     this.wellService.getWell(selectedWell).subscribe( well =>{
       this.well = well;
     });
  }
}

import { Component, OnInit } from '@angular/core';
import {WellService} from "../service/well.service";
import {WellClass} from "../model/WellClass";

@Component({
  selector: 'app-recent-production-list',
  templateUrl: './recent-production-list.component.html',
  styleUrls: ['./recent-production-list.component.css'],
  providers: [WellService]
})
export class RecentProductionListComponent implements OnInit {
  wells: WellClass[] = [];
  constructor(private wellService: WellService){ }

  ngOnInit(): void {
    this.wellService.getAllWells().subscribe(wells =>{
      this.wells = wells;
      console.log(JSON.stringify(this.wells));
    });
  }
}

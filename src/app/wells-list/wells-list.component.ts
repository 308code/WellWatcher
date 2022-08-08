import { Component, OnInit } from '@angular/core';
import {WellService} from "../service/well.service";
import {WellClass} from "../model/WellClass";

@Component({
  selector: 'app-wells-list',
  templateUrl: './wells-list.component.html',
  styleUrls: ['./wells-list.component.css']
})
export class WellsListComponent implements OnInit {
  wells: WellClass[] = [];
  constructor(private wellService: WellService) { }

  ngOnInit(): void {
    this.wellService.getAllWells().subscribe(wells =>{
      this.wells = wells;
    });

  }
}

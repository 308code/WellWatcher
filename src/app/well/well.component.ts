import { Component, OnInit } from '@angular/core';
import {WellService} from "../service/well.service";

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  public well : any;
  constructor(private wellService: WellService) { }

  ngOnInit(): void {
    this.wellService.getWell("62391268ace85f24167de3ec").subscribe(well =>{
      this.well = well;
    });
  }

}

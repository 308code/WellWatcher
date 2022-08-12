import { Component, OnInit } from '@angular/core';
import {WellClass} from "../model/WellClass";
import {WellService} from "../service/well.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-well-create',
  templateUrl: './well-create.component.html',
  styleUrls: ['./well-create.component.css']
})
export class WellCreateComponent implements OnInit {

  constructor(private wellService: WellService, private router: Router) { }

  ngOnInit(): void {
  }

  public createWell(apiNumber: string, permitNumber: string, wellName: string,
                    wellNumber: string, countyName: string, townshipName: string) {
    let well: WellClass = new WellClass("", apiNumber, permitNumber, wellName, wellNumber,
      countyName, townshipName, []);
    this.wellService.insertWell(well).subscribe(() => {
      this.router.navigate(['/wells']);
    });
  }
}

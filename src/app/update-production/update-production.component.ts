import { Component, OnInit } from '@angular/core';
import {WellService} from "../service/well.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-production',
  templateUrl: './update-production.component.html',
  styleUrls: ['./update-production.component.css']
})
export class UpdateProductionComponent implements OnInit {
  constructor(private wellService: WellService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
  }
}

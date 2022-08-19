import { Component, OnInit } from '@angular/core';
import {WellService} from "../service/well.service";
import {WellReportModel} from "../model/wellReport.model";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  from: Date = new Date();
  to: Date = new Date();
  beginningQtrMonths : number[] = [0,3,6,9];
  selectedTimeFrame: string = "";
  report: WellReportModel[] = [];
  disableDates: boolean = false;

  constructor(private wellService: WellService) {
    this.from.toLocaleString('en-US', { timeZone: 'America/New_York' });
    this.to.toLocaleString('en-US', { timeZone: 'America/New_York' });
    this.disableDates = true;
  }

  ngOnInit(): void {
    this.setTimes("This Year");
  }

  generateReport(from: string | undefined, to: string | undefined){
    let f = new Date(from == undefined ? new Date(): from);
    let t = new Date(to == undefined ? new Date(): to);
    this.wellService.generateReport(f, t).subscribe( report => {
      this.report = report;
    });
  }

  setTimes(selection: string){
    const today = new Date();
    today.toLocaleString('en-US', { timeZone: 'America/New_York' });
    switch (selection){
      case 'Custom':{
        this.selectedTimeFrame = "Custom";
        this.from.setFullYear(today.getFullYear(),0,1);
        this.to = today;
        this.disableDates = false;
        break;
      }
      case 'This Year':{
        this.selectedTimeFrame = "This Year";
        this.from.setFullYear(today.getFullYear(),0,1);
        this.to.setFullYear(today.getFullYear()+1,0,0);
        this.disableDates = true;
        break;
      }
      case 'Last Year':{
        this.selectedTimeFrame = "Last Year";
        this.from.setFullYear(today.getFullYear()-1,0,1);
        this.to.setFullYear(today.getFullYear(),0,0);
        this.disableDates = true;
        break;
      }
      case 'This Quarter':{
        this.selectedTimeFrame = "This Quarter";
        let currentMonth = today.getMonth();
        while(!this.beginningQtrMonths.includes(currentMonth) && currentMonth >= 0){
          currentMonth--;
        }
        this.from.setFullYear(today.getFullYear(),currentMonth,1);

        currentMonth = today.getMonth();
        while(!this.beginningQtrMonths.includes(currentMonth) && currentMonth <= 11){
          currentMonth++;
        }
        this.to.setFullYear(today.getFullYear(),currentMonth,0);
        this.disableDates = true;
        break;
      }
      case 'Last Quarter':{
        this.selectedTimeFrame = "Last Quarter";
        let currentMonth = today.getMonth();
        currentMonth = currentMonth -3;
        if(currentMonth < 0){
          this.from.setFullYear(today.getFullYear()-1,8,1);
          this.to.setFullYear(today.getFullYear()-1,0,0);
        }else{
          while(!this.beginningQtrMonths.includes(currentMonth) && currentMonth >= 0){
            currentMonth--;
          }
          this.from.setFullYear(today.getFullYear(),currentMonth,1);

          currentMonth = today.getMonth()-3;
          while(!this.beginningQtrMonths.includes(currentMonth) && currentMonth <= 11){
            currentMonth++;
          }
          this.to.setFullYear(today.getFullYear(),currentMonth,0);
          this.disableDates = true;
          break;
        }
      }
    }
    this.generateReport(this.from.toISOString().slice(0,10),this.to.toISOString().slice(0,10));
  }

}

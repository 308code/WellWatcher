import { Injectable } from '@angular/core';
import {Well} from "../model/well.model";
import {Production} from "../model/production.model";

@Injectable({
  providedIn: 'root'
})
export class WellDaoService {
  wells: Well[] = [];


  constructor() {
    this.wells = this.getWells(new Date(),new Date());
  }

  public getWell(id: string):Well{
    let well : Well = this.wells[0];
    for(let value of this.wells){
      if(value.getId() === id){
        well = value;
        break;
      }
    }
    return well;
  }

  public insertProduction(id: string, type: string, quantity: number, dateProduced: any){
    const indexPos = this.getWellIndex(id);
    if(indexPos >= 0){
      this.wells[indexPos].getProduction().push(new Production(type,quantity,dateProduced))
    }
  }

  private getWellIndex(id: string): number {
    for (let i = 0; i < this.wells.length; i++) {
      if (id === this.wells[i].getId()) {
        return i;
      }
    }
    return -1;
  }

  private getWells(fromDate: Date, toDate: Date): Well[]{
    let wells : Well[] = [];
    wells.push(new Well("62391268ace85f24167de3ec","23416",
      "Bear Albert","1", "Knox", "Union",
      new Date("2022-02-21"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("623912eeace85f24167de3ed","27259",
      "Tiverton Timber","4", "Coshocton", "Tiverton",
      new Date("2000-10-30"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("6239131face85f24167de3ee","27070",
      "Tiverton Timber","3", "Coshocton", "Tiverton",
      new Date("2018-05-13"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("6239135cace85f24167de3f0","21826",
      "Tiverton Timber","1", "Coshocton", "Tivergon",
      new Date("2018-05-13"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("62391376ace85f24167de3f1","20945",
      "Day CE","1", "Coshocton", "Tivergon",
      new Date("2018-01-13"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("623913a7ace85f24167de3f2","23496",
      "Baer","4", "Knox", "Union",
      new Date("2019-01-13"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("623913ceace85f24167de3f3","23495",
      "Baer","3", "Knox", "Union",
      new Date("2020-04-11"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("62391458ace85f24167de3f8","61233",
      "Rogers David & Grace","1", "Holmes", "Richland",
      new Date("2020-06-11"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("623914f9ace85f24167de3fe","24149",
      "Vanhorn Earl & Sherrill","1", "Morrow", "Congress",
      new Date("2020-06-11"),
      new Array(new Production("Oil",155,new Date("2020-10-15")))));
    wells.push(new Well("623914f9ace85f24167de3ff","24150",
      "Vanhorn Earl & Sherrill","2", "Morrow", "Congress",
      new Date("2020-06-13"), new Array(new Production("Gas",65.325,new Date("2021-10-15")))));
    wells.push(new Well("623914f9ace85f24167de3fd","24151",
      "Vanhorn Earl & Sherrill","3", "Morrow", "Congress",
      new Date("2020-06-15"), new Array(new Production("Oil",175,new Date("2022-01-15")))));
    wells.push(new Well("623914f9ace85f24167de3fc","24152",
      "Vanhorn Earl & Sherrill","4", "Morrow", "Congress",
      new Date("2020-06-17"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Oil",165,new Date("2022-03-15")))));
    wells.push(new Well("623914f9ace85f24167de3fb","24153",
      "Vanhorn Earl & Sherrill","5", "Morrow", "Congress",
      new Date("2020-06-19"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Gas",165,new Date("2022-04-25")))));
    wells.push(new Well("623914f9ace85f24167de3fa","24154",
      "Vanhorn Earl & Sherrill","6", "Morrow", "Congress",
      new Date("2020-06-21"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Brine",165,new Date("2019-10-12")))));
    wells.push(new Well("623914f9ace85f24167de3f9","24155",
      "Vanhorn Earl & Sherrill","7", "Morrow", "Congress",
      new Date("2020-06-23"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Oil",165,new Date("2017-11-11")))));
    wells.push(new Well("623914f9ace85f24167de3f8","24156",
      "Vanhorn Earl & Sherrill","8", "Morrow", "Congress",
      new Date("2020-06-25"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Gas",165,new Date("2018-10-15")))));
    wells.push(new Well("623914f9ace85f24167de3f7","24157",
      "Vanhorn Earl & Sherrill","9", "Morrow", "Congress",
      new Date("2020-06-27"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Brine",165,new Date("2016-10-15")))));
    wells.push(new Well("623914f9ace85f24167de3f6","24158",
      "Vanhorn Earl & Sherrill","10", "Morrow", "Congress",
      new Date("2020-06-29"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Oil",165,new Date("2017-10-15")))));
    wells.push(new Well("623914f9ace85f24167de3f5","24159",
      "Vanhorn Earl & Sherrill","11", "Morrow", "Congress",
      new Date("2020-06-30"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Gas",165,new Date("2018-10-15")))));
    wells.push(new Well("623914f9ace85f24167de3f4","24160",
      "Vanhorn Earl & Sherrill","12", "Morrow", "Congress",
      new Date("2020-07-01"), new Array(new Production("Oil",165,new Date("2020-10-15")),
        new Production("Brine",50,new Date("2018-10-11")),
        new Production("Brine",165,new Date("2019-10-15")))));
    return wells;
  }
}

import {Production} from "./production.model";

export interface Well {
  id: string;
  apiNumber: string;
  permitNumber: string;
  wellName: string;
  wellNumber: string;
  county: string;
  township: string;
  production: Production[];
}

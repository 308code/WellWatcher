import {Production} from "./production.model";

export interface Well {
  id: string;
  apiNumber: string;
  permitNumber: string;
  wellName: string;
  wellNumber: string;
  countyName: string;
  townshipName: string;
  production: Production[];
}

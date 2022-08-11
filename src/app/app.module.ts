import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecentProductionListComponent } from './recent-production-list/recent-production-list.component';
import { InsertProductionComponent } from './insert-production/insert-production.component';
import {Routes, RouterModule} from "@angular/router";
import { WellsListComponent } from './wells-list/wells-list.component';
import { ProductionComponent } from './production/production.component';
import { ReportsComponent } from './reports/reports.component';
import {FormsModule} from "@angular/forms";
import { UpdateProductionComponent } from './update-production/update-production.component';
import { HttpClientModule } from '@angular/common/http';
import { WellComponent } from './well/well.component';
import { WellCreateComponent } from './well-create/well-create.component';

const appRoutes: Routes =  [
  { path: '' , component: RecentProductionListComponent},
  { path: 'wells' , component: WellsListComponent},
  { path: 'wells/create' , component: WellCreateComponent},
  { path: 'wells/:id' , component: WellComponent},
  { path: 'production' , component: ProductionComponent},
  { path: 'production/:id' , component: InsertProductionComponent},
  { path: 'production/:id/:pos', component: UpdateProductionComponent},
  { path: 'reports' , component: ReportsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecentProductionListComponent,
    InsertProductionComponent,
    ProductionComponent,
    ReportsComponent,
    UpdateProductionComponent,
    WellsListComponent,
    WellComponent,
    WellCreateComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModulesModule } from 'src/app/tools';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    ModulesModule,
  ]
})
export class DashboardModule { }

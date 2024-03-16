import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ModulesModule } from 'src/app/tools';


@NgModule({
  imports: [
    HomepageRoutingModule,
    ModulesModule,
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }

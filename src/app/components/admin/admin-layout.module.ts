import { NgModule } from '@angular/core';
import {
  AdminLayoutContentComponent,
  AdminLayoutFooterComponent,
  AdminLayoutNavbarComponent,
} from './layout';
import { RouterModule } from '@angular/router';
import { ModulesModule } from 'src/app/tools';

@NgModule({
  declarations: [
    AdminLayoutContentComponent,
    AdminLayoutFooterComponent,
    AdminLayoutNavbarComponent,
  ],
  imports: [RouterModule, ModulesModule],
})
export class AdminLayoutModule {}

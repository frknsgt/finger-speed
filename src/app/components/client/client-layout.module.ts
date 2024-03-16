import { NgModule } from '@angular/core';
import {
  ClientLayoutContentComponent,
  ClientLayoutFooterComponent,
  ClientLayoutNavbarComponent,
} from './layout';
import { RouterModule } from '@angular/router';
import { ModulesModule } from 'src/app/tools';

@NgModule({
  declarations: [
    ClientLayoutContentComponent,
    ClientLayoutFooterComponent,
    ClientLayoutNavbarComponent,
  ],
  imports: [RouterModule, ModulesModule],
})
export class ClientLayoutModule {}

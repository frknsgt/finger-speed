import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdminLayoutContentComponent,
  ClientLayoutContentComponent,
} from './components';
import { SIDEBAR_TITLE } from './tools';
import { AdminGuard } from './tools/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutContentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages').then((m) => m.HomepageModule),
      },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutContentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages').then((m) => m.DashboardModule),
        canActivate: [AdminGuard],
        data: {
          title: 'Dashboard',
          icon: 'fas fa-list',
          sidebarTitle: SIDEBAR_TITLE.HOME,
        },
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public getRoutes() {
    return routes;
  }
}

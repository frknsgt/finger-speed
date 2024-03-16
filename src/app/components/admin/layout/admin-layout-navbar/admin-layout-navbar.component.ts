import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SIDEBAR_TITLE } from 'src/app/tools';
import { NavbarRoutes } from './admin-layout-navbar-model';

@Component({
  selector: 'admin-layout-navbar',
  templateUrl: './admin-layout-navbar.component.html',
  styleUrls: ['./admin-layout-navbar.component.scss'],
})
export class AdminLayoutNavbarComponent implements OnInit {
  constructor(private routingModule: AppRoutingModule) {}

  public routes: Array<NavbarRoutes> = [];
  public SIDEBAR_TITLE = SIDEBAR_TITLE;
  public sidebarTitles: Array<SIDEBAR_TITLE> = [];

  async ngOnInit() {
    const routes = await this.routingModule
      .getRoutes()
      .find((route: any) => route.path === 'admin');
    routes?.children?.map((route: any) =>
      this.routes.push({
        path: route?.path,
        title: route?.data?.title,
        icon: route?.data?.icon,
        sidebarTitle: route?.data?.sidebarTitle,
      })
    );
    this.routes = this.routes?.filter((data: any) => data?.sidebarTitle);
    this.sidebarTitles = Object.values(this.SIDEBAR_TITLE).filter(
      (data: any) => typeof data === 'string'
    );
  }
  
}

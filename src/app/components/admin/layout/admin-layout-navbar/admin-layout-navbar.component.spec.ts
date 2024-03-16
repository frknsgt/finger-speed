import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutNavbarComponent } from './admin-layout-navbar.component';

describe('AdminLayoutNavbarComponent', () => {
  let component: AdminLayoutNavbarComponent;
  let fixture: ComponentFixture<AdminLayoutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLayoutNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

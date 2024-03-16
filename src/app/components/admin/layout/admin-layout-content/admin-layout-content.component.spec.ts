import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutContentComponent } from './admin-layout-content.component';

describe('AdminLayoutContentComponent', () => {
  let component: AdminLayoutContentComponent;
  let fixture: ComponentFixture<AdminLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLayoutContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

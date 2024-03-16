import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLayoutNavbarComponent } from './client-layout-navbar.component';

describe('ClientLayoutNavbarComponent', () => {
  let component: ClientLayoutNavbarComponent;
  let fixture: ComponentFixture<ClientLayoutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLayoutNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLayoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

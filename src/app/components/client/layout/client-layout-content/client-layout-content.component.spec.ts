import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLayoutContentComponent } from './client-layout-content.component';

describe('ClientLayoutContentComponent', () => {
  let component: ClientLayoutContentComponent;
  let fixture: ComponentFixture<ClientLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLayoutContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

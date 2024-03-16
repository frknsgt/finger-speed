import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLayoutFooterComponent } from './client-layout-footer.component';

describe('ClientLayoutFooterComponent', () => {
  let component: ClientLayoutFooterComponent;
  let fixture: ComponentFixture<ClientLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLayoutFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

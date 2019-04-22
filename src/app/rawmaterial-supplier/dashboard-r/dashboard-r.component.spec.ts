import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRComponent } from './dashboard-r.component';

describe('DashboardRComponent', () => {
  let component: DashboardRComponent;
  let fixture: ComponentFixture<DashboardRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

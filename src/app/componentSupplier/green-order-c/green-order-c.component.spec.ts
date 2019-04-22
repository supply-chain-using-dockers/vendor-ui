import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenOrderCComponent } from './green-order-c.component';

describe('GreenOrderCComponent', () => {
  let component: GreenOrderCComponent;
  let fixture: ComponentFixture<GreenOrderCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenOrderCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenOrderCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

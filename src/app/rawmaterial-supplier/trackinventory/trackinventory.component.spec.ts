import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackinventoryComponent } from './trackinventory.component';

describe('TrackinventoryComponent', () => {
  let component: TrackinventoryComponent;
  let fixture: ComponentFixture<TrackinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

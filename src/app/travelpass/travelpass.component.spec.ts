import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelpassComponent } from './travelpass.component';

describe('TravelpassComponent', () => {
  let component: TravelpassComponent;
  let fixture: ComponentFixture<TravelpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelpassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyopenedHotelsComponent } from './newlyopened-hotels.component';

describe('NewlyopenedHotelsComponent', () => {
  let component: NewlyopenedHotelsComponent;
  let fixture: ComponentFixture<NewlyopenedHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewlyopenedHotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewlyopenedHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

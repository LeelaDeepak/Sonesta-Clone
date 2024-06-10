import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyrenovatedhotelsComponent } from './newlyrenovatedhotels.component';

describe('NewlyrenovatedhotelsComponent', () => {
  let component: NewlyrenovatedhotelsComponent;
  let fixture: ComponentFixture<NewlyrenovatedhotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewlyrenovatedhotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewlyrenovatedhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

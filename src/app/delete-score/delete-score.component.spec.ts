import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteScoreComponent } from './delete-score.component';

describe('DeleteScoreComponent', () => {
  let component: DeleteScoreComponent;
  let fixture: ComponentFixture<DeleteScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

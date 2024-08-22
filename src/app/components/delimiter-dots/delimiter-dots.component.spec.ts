import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelimiterDotsComponent } from './delimiter-dots.component';

describe('DelimiterDotsComponent', () => {
  let component: DelimiterDotsComponent;
  let fixture: ComponentFixture<DelimiterDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelimiterDotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelimiterDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

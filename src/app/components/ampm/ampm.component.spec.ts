import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpmComponent } from './ampm.component';

describe('AmpmComponent', () => {
  let component: AmpmComponent;
  let fixture: ComponentFixture<AmpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmpmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

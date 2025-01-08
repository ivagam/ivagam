import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbiTapComponent } from './arbi-tap.component';

describe('ArbiTapComponent', () => {
  let component: ArbiTapComponent;
  let fixture: ComponentFixture<ArbiTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbiTapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbiTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

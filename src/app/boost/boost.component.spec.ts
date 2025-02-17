import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostComponent } from './boost.component';

describe('BoostComponent', () => {
  let component: BoostComponent;
  let fixture: ComponentFixture<BoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

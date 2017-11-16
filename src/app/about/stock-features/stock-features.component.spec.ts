import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFeaturesComponent } from './stock-features.component';

describe('StockFeaturesComponent', () => {
  let component: StockFeaturesComponent;
  let fixture: ComponentFixture<StockFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

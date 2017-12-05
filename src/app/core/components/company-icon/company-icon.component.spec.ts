import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIconComponent } from './company-icon.component';

describe('CompanyIconComponent', () => {
  let component: CompanyIconComponent;
  let fixture: ComponentFixture<CompanyIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

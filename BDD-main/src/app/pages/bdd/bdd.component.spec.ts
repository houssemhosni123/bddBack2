import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDDComponent } from './bdd.component';

describe('BDDComponent', () => {
  let component: BDDComponent;
  let fixture: ComponentFixture<BDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

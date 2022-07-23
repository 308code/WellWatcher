import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProductionComponent } from './insert-production.component';

describe('InsertProductionComponent', () => {
  let component: InsertProductionComponent;
  let fixture: ComponentFixture<InsertProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellCreateComponent } from './well-create.component';

describe('WellCreateComponent', () => {
  let component: WellCreateComponent;
  let fixture: ComponentFixture<WellCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

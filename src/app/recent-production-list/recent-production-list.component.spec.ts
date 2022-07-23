import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProductionListComponent } from './recent-production-list.component';

describe('RecentProductionListComponent', () => {
  let component: RecentProductionListComponent;
  let fixture: ComponentFixture<RecentProductionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentProductionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentProductionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

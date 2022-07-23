import { TestBed } from '@angular/core/testing';

import { WellDaoService } from './well-dao.service';

describe('WellDaoService', () => {
  let service: WellDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WellDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

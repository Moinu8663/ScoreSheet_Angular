import { TestBed } from '@angular/core/testing';

import { ScoresheetServiceService } from './scoresheet-service.service';

describe('ScoresheetServiceService', () => {
  let service: ScoresheetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoresheetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PollsService } from './polls-service.service';

describe('PollsServiceService', () => {
  let service: PollsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

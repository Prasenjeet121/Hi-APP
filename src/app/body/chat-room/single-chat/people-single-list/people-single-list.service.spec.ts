import { TestBed, inject } from '@angular/core/testing';

import { PeopleSingleListService } from './people-single-list.service';

describe('PeopleSingleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleSingleListService]
    });
  });

  it('should be created', inject([PeopleSingleListService], (service: PeopleSingleListService) => {
    expect(service).toBeTruthy();
  }));
});

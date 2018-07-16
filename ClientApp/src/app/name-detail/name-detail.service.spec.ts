import { TestBed, inject } from '@angular/core/testing';

import { NameDetailService } from './name-detail.service';

describe('NameDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameDetailService]
    });
  });

  it('should be created', inject([NameDetailService], (service: NameDetailService) => {
    expect(service).toBeTruthy();
  }));
});

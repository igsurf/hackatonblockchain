import { TestBed, inject } from '@angular/core/testing';

import { ApplicationServiceService } from './application-service.service';

describe('ApplicationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationServiceService]
    });
  });

  it('should be created', inject([ApplicationServiceService], (service: ApplicationServiceService) => {
    expect(service).toBeTruthy();
  }));
});

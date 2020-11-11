import { TestBed, inject } from '@angular/core/testing';

import { UriService } from './uri.service';

describe('UriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UriService]
    });
  });

  it('should be created', inject([UriService], (service: UriService) => {
    expect(service).toBeTruthy();
  }));

  it('Check buildUserMicroServiceUri', inject([UriService], (service: UriService) => {
    expect(service.buildUserMicroServiceUri()).toBe('https://localhost:3000/user/');
  }));

});
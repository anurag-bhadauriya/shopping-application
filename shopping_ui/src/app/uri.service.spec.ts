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
    expect(service.buildUserMicroServiceUri()).toBe('http://localhost:3000/user/');
  }));

  it('Check buildProductMicroServiceUri', inject([UriService], (service: UriService) => {
    expect(service.buildProductsMicroServiceUri()).toBe('http://localhost:8000/');
  }));

  it('Check buildCartMicroServiceUri', inject([UriService], (service: UriService) => {
    expect(service.buildCartMicroServiceUri()).toBe('http://localhost:9000//');
  }));

  it('Check buildOrderMicroServiceUri', inject([UriService], (service: UriService) => {
    expect(service.buildCartMicroServiceUri()).toBe('http://localhost:9000//');
  }));

});
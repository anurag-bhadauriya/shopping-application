import { TestBed, inject } from '@angular/core/testing';

import { GuardService } from './guard.service';
import {Router} from '@angular/router'

describe('GuardServiceService', () => {
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardService,{
        provide:Router,useValue:mockRouter
      }]
    });
  });

  it('should be created', inject([GuardService,Router], (service: GuardService,Router) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([GuardService,Router], (service: GuardService,Router) => {
    expect(service.canActivate()).toBeFalsy();
  }));

});

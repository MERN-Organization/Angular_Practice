import { TestBed } from '@angular/core/testing';

import { AllModuleLoadService } from './all-module-load.service';

describe('AllModuleLoadService', () => {
  let service: AllModuleLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllModuleLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

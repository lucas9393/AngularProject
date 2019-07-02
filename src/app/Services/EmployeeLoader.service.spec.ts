/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeLoaderService } from './EmployeeLoader.service';

describe('Service: EmployeeLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeLoaderService]
    });
  });

  it('should ...', inject([EmployeeLoaderService], (service: EmployeeLoaderService) => {
    expect(service).toBeTruthy();
  }));
});

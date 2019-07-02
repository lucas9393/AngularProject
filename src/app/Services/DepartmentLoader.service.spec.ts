/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepartmentLoaderService } from './DepartmentLoader.service';

describe('Service: DepartmentLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentLoaderService]
    });
  });

  it('should ...', inject([DepartmentLoaderService], (service: DepartmentLoaderService) => {
    expect(service).toBeTruthy();
  }));
});

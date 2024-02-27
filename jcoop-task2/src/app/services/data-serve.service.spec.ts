import { TestBed } from '@angular/core/testing';

import { DataServeService } from './data-serve.service';

describe('DataServeService', () => {
  let service: DataServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

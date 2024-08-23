import { TestBed } from '@angular/core/testing';

import { MemoriaLocalService } from './memoria-local.service';

describe('MemoriaLocalService', () => {
  let service: MemoriaLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoriaLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

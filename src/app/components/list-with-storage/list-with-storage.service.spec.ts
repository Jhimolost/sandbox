import { TestBed } from '@angular/core/testing';

import { ListWithStorageService } from './list-with-storage.service';

describe('ListWithStorageService', () => {
  let service: ListWithStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListWithStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

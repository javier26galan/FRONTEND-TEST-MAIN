import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe emitir un numero random cada segundo', (done) => {
    const subscrition = service.getNumbers().subscribe((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(10);
      subscrition.unsubscribe();
      done();
    });
  });
});

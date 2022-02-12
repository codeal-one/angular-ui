import { TestBed } from '@angular/core/testing';

import { OneUiService } from './one-ui.service';

describe('OneUiService', () => {
  let service: OneUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

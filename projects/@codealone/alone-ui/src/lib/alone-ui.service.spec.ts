import { TestBed } from '@angular/core/testing';

import { AloneUiService } from './alone-ui.service';

describe('AloneUiService', () => {
  let service: AloneUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AloneUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

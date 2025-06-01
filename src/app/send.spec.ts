import { TestBed } from '@angular/core/testing';

import { Send } from './send.service';

describe('Send', () => {
  let service: Send;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Send);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

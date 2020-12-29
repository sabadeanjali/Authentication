import { TestBed } from '@angular/core/testing';

import { TokenIntersecptorService } from './token-intersecptor.service';

describe('TokenIntersecptorService', () => {
  let service: TokenIntersecptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIntersecptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

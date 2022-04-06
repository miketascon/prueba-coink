import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CoinkService } from './coink.service';

describe('CoinkService', () => {
  let service: CoinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(CoinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

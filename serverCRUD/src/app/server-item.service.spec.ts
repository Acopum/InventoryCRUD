import { TestBed } from '@angular/core/testing';

import { ServerItemService } from './server-item.service';

describe('ServerItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerItemService = TestBed.get(ServerItemService);
    expect(service).toBeTruthy();
  });
});

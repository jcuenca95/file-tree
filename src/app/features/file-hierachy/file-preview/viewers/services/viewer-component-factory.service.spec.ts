import { TestBed } from '@angular/core/testing';

import { ViewerComponentFactoryService } from './viewer-component-factory.service';

describe('ViewerComponentFactoryService', () => {
  let service: ViewerComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewerComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

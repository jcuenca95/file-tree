import { TestBed } from '@angular/core/testing';
import { ViewerComponentMap } from '../../../../../core/injection-tokens';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

import { ViewerComponentFactoryService } from './viewer-component-factory.service';

describe('ViewerComponentFactoryService', () => {
  let service: ViewerComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ViewerComponentMap,
          useValue: {
            jpg: ImageViewerComponent
          }
        }
      ]
    });
    service = TestBed.inject(ViewerComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});

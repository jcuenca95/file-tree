import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerComponentMap } from '../../../core/injection-tokens';
import { FileHierarchyService } from '../services/file-hierarchy/file-hierarchy.service';

import { FilePreviewComponent } from './file-preview.component';
import { ImageViewerComponent } from './viewers/image-viewer/image-viewer.component';
import { ViewerComponentFactoryService } from './viewers/services/viewer-component-factory.service';

describe('FilePreviewComponent', () => {
  let component: FilePreviewComponent;
  let fixture: ComponentFixture<FilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilePreviewComponent],
      providers: [
        {
          provide: ViewerComponentMap,
          useValue: {
            jpg: ImageViewerComponent
          }
        },
        FileHierarchyService,
        ViewerComponentFactoryService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewerComponent } from 'src/app/core/interfaces/viewer-component.interface';
import { FileHierarchyService } from '../services/file-hierarchy/file-hierarchy.service';
import { ImageViewerComponent } from './viewers/image-viewer/image-viewer.component';
import { ViewerComponentFactoryService } from './viewers/services/viewer-component-factory.service';

@Component({
  selector: 'file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent implements AfterContentInit, OnDestroy {
  @ViewChild('viewer', { read: ViewContainerRef })
  private viewerContainer!: ViewContainerRef;
  file!: File | undefined;
  private file$ = this.fileHierachyService.selectedFileRef$;
  private subscriptions: Subscription[] = [];

  constructor(
    private fileHierachyService: FileHierarchyService,
    private viewerComponentFactory: ViewerComponentFactoryService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngAfterContentInit(): void {
    this.file$.subscribe((file) => {
      this.file = file;
      this.viewerContainer.clear();
      if (file) {
        const fileNameSplitted = file.name.split('.');
        const fileExt = fileNameSplitted[fileNameSplitted.length - 1];
        const component = this.viewerComponentFactory.getComponent(fileExt);
        const viewerComponent =
          this.viewerContainer.createComponent<ViewerComponent>(
            component as any
          );
        viewerComponent.instance.file = file;
      }
    });
  }
}

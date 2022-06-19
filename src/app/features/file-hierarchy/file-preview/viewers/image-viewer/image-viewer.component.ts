import { Component } from '@angular/core';
import { ViewerComponent } from '../../../classes/viewer-component.class';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent extends ViewerComponent {}

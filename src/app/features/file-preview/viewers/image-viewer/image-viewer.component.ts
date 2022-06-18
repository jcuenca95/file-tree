import { Component, OnInit } from '@angular/core';
import { ViewerComponent } from 'src/app/core/interfaces/viewer-component.interface';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent extends ViewerComponent {}

import { Component, OnInit } from '@angular/core';
import { ViewerComponent } from '../../../classes/viewer-component.class';

@Component({
  selector: 'app-default-viewer',
  templateUrl: './default-viewer.component.html',
  styleUrls: ['./default-viewer.component.scss']
})
export class DefaultViewerComponent extends ViewerComponent{}

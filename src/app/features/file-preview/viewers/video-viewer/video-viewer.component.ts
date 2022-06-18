import { Component, OnInit } from '@angular/core';
import { ViewerComponent } from '../../../../core/interfaces/viewer-component.interface';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss'],
})
export class VideoViewerComponent extends ViewerComponent implements OnInit {
  ngOnInit(): void {}
}

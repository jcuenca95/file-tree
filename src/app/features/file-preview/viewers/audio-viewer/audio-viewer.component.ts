import { Component, OnInit } from '@angular/core';
import { ViewerComponent } from '../../../../core/interfaces/viewer-component.interface';

@Component({
  selector: 'app-audio-viewer',
  templateUrl: './audio-viewer.component.html',
  styleUrls: ['./audio-viewer.component.scss'],
})
export class AudioViewerComponent extends ViewerComponent implements OnInit {
  ngOnInit(): void {}
}

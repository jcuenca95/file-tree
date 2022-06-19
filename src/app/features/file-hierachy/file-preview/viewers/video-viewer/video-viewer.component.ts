import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewerComponent } from '../../../interfaces/viewer-component.interface';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss'],
})
export class VideoViewerComponent
  extends ViewerComponent
  implements AfterViewInit
{
  @ViewChild('videoPlayer', { read: ElementRef })
  private videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.videoPlayer?.nativeElement.load();
  }
}

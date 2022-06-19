import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ViewerComponent } from '../../../../../core/interfaces/viewer-component.interface';

@Component({
  selector: 'app-audio-viewer',
  templateUrl: './audio-viewer.component.html',
  styleUrls: ['./audio-viewer.component.scss'],
})
export class AudioViewerComponent
  extends ViewerComponent
  implements AfterViewInit
{
  @ViewChild('audioPlayer', { read: ElementRef })
  private audioPlayer!: ElementRef<HTMLVideoElement>;

  constructor(private domSanitizer: DomSanitizer) {
    super();
  }

  override fileData$ = new Observable((subscriber) => {
    if (this.file) {
      subscriber.next(
        this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.file))
      );
    }
  });

  ngAfterViewInit(): void {
    this.audioPlayer?.nativeElement.load();
  }
}

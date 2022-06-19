import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTreeComponent } from './file-tree/file-tree.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { MaterialModule } from '../material/material.module';
import { FileHierarchyService } from './services/file-hierarchy/file-hierarchy.service';
import { FileNodeComponent } from './file-tree/file-node/file-node.component';
import { ImageViewerComponent } from './file-preview/viewers/image-viewer/image-viewer.component';
import { VideoViewerComponent } from './file-preview/viewers/video-viewer/video-viewer.component';
import { AudioViewerComponent } from './file-preview/viewers/audio-viewer/audio-viewer.component';
import { ViewerComponentMap } from '../core/injection-tokens';
import { FileDetailsComponent } from './file-preview/file-details/file-details.component';

@NgModule({
  declarations: [
    FileTreeComponent,
    FilePreviewComponent,
    FileNodeComponent,
    ImageViewerComponent,
    VideoViewerComponent,
    AudioViewerComponent,
    FileDetailsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [FileTreeComponent, FilePreviewComponent],
  providers: [
    FileHierarchyService,
    {
      provide: ViewerComponentMap,
      useValue: {
        jpg: ImageViewerComponent,
        jpeg: ImageViewerComponent,
        png: ImageViewerComponent,
        mp3: AudioViewerComponent,
        mp4: VideoViewerComponent,
      },
    },
  ],
})
export class FeaturesModule {}

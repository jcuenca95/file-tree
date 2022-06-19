import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFilesizeModule } from 'ngx-filesize';
import { ViewerComponentMap } from '../../core/injection-tokens';
import { MaterialModule } from '../../material/material.module';
import { FileDetailsComponent } from './file-preview/file-details/file-details.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { AudioViewerComponent } from './file-preview/viewers/audio-viewer/audio-viewer.component';
import { ImageViewerComponent } from './file-preview/viewers/image-viewer/image-viewer.component';
import { VideoViewerComponent } from './file-preview/viewers/video-viewer/video-viewer.component';
import { FileNodeComponent } from './file-tree/file-node/file-node.component';
import { FileTreeComponent } from './file-tree/file-tree.component';
import { FileHierarchyService } from './services/file-hierarchy/file-hierarchy.service';
import { InputDirectoryComponent } from './input-directory/input-directory.component';
import { DefaultViewerComponent } from './file-preview/viewers/default-viewer/default-viewer.component';

@NgModule({
  declarations: [
    InputDirectoryComponent,
    FileTreeComponent,
    FilePreviewComponent,
    FileNodeComponent,
    ImageViewerComponent,
    VideoViewerComponent,
    AudioViewerComponent,
    FileDetailsComponent,
    DefaultViewerComponent,
  ],
  imports: [CommonModule, NgxFilesizeModule, MaterialModule],
  exports: [FileTreeComponent, FilePreviewComponent, InputDirectoryComponent],
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
export class FileHierachyModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTreeComponent } from './file-tree/file-tree.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { MaterialModule } from '../material/material.module';
import { FileHierarchyService } from './services/file-hierarchy/file-hierarchy.service';

@NgModule({
  declarations: [FileTreeComponent, FilePreviewComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FileTreeComponent, FilePreviewComponent],
  providers: [FileHierarchyService],
})
export class FeaturesModule {}

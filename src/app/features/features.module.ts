import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FileHierachyModule } from './file-hierarchy/file-hierachy.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FileHierachyModule],
  exports: [FileHierachyModule],
})
export class FeaturesModule {}

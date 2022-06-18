import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FileHierarchyService } from '../services/file-hierarchy/file-hierarchy.service';

@Component({
  selector: 'file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent implements OnInit {
  @ViewChild('viewer') private viewerContainer!: ViewContainerRef;
  file$ = this.fileHierachyService.selectedFileRef$;
  constructor(private fileHierachyService: FileHierarchyService) {}

  ngOnInit(): void {}
}

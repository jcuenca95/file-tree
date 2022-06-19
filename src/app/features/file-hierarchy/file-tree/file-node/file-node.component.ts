import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { getIconFromExt } from '../../../../core/helpers/file-icons.helper';
import {
  FileHierarchyService,
  PlainNode,
} from '../../services/file-hierarchy/file-hierarchy.service';

@Component({
  selector: 'file-node',
  templateUrl: './file-node.component.html',
  styleUrls: ['./file-node.component.scss'],
})
export class FileNodeComponent implements OnInit {
  @Input() node!: PlainNode;
  selectedClass$: Observable<string> = of('');

  constructor(private fileHierarchyService: FileHierarchyService) {}

  ngOnInit(): void {
    this.selectedClass$ = this.fileHierarchyService.selectedFile$.pipe(
      map((selectedNodeId) =>
        selectedNodeId === this.node.id ? 'selected' : ''
      )
    );
  }

  get icon() {
    if (this.node.type === 'folder') {
      return this.node.isOpen ? 'folder_open' : 'folder';
    }
    const splittedFilename = this.node.name.split('.');
    return getIconFromExt(splittedFilename[splittedFilename.length - 1]);
  }

  handleOnNodeClick() {
    if (this.node.type === 'file') {
      this.fileHierarchyService.selectFile(this.node.id);
    } else {
      this.fileHierarchyService.toggleFolder(this.node.id);
    }
  }
}

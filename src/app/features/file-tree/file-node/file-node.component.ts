import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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
    return this.node.type === 'folder' ? 'folder' : 'description';
  }

  handleOnNodeClick() {
    if (this.node.type === 'file') {
      this.fileHierarchyService.selectFile(this.node.id);
    } else {
      this.fileHierarchyService.toggleFolder(this.node.id);
    }
  }
}

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
    this.selectedClass$ = this.fileHierarchyService.selectedNodes$.pipe(
      map((selectedNodeId) =>
        selectedNodeId === this.node.id ? 'selected' : ''
      )
    );
  }

  get icon() {
    return this.node.type === 'folder' ? 'folder' : 'description';
  }

  selectNode() {
    this.fileHierarchyService.selectNode(this.node.id);
  }
}

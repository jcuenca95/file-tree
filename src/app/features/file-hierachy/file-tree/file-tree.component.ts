import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TreeNode } from '../../../core/interfaces/tree-node.interface';
import {
  PlainNode,
  FileHierarchyService,
} from '../services/file-hierarchy/file-hierarchy.service';

@Component({
  selector: 'file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss'],
})
export class FileTreeComponent implements OnInit {
  @Input() parentId!: TreeNode['id'] | undefined;
  @Input() paddingLeft: number = 0;

  node$: Observable<PlainNode | undefined> = of();
  children$: Observable<PlainNode[]> = of([]);
  paddingStep: number = 16;

  constructor(private fileHierarchyService: FileHierarchyService) {}

  get paddingLeftStyle(): string {
    return `padding-left: ${this.paddingLeft}px`;
  }

  ngOnInit(): void {
    this.node$ = this.fileHierarchyService.getElement(this.parentId);
    this.children$ = this.fileHierarchyService.getChildren(this.parentId);
  }
}

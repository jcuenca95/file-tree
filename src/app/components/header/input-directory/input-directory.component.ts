import { Component, OnInit } from '@angular/core';
import {
  FileHierarchyService,
  PlainNode,
} from '../../../features/services/file-hierarchy/file-hierarchy.service';

@Component({
  selector: 'input-directory',
  templateUrl: './input-directory.component.html',
  styleUrls: ['./input-directory.component.scss'],
})
export class InputDirectoryComponent implements OnInit {
  constructor(private fileHierarchyService: FileHierarchyService) {}

  ngOnInit(): void {}

  handleOnChangeInput(event: any) {
    const files: File[] = [];
    for (let i = 0; i < event.target.files.length; i++) {
      const file: File = event.target.files.item(i);
      files.push(file);
    }
    this.fileHierarchyService.loadTree(files);
  }
}

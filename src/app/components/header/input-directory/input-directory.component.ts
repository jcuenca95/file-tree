import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FileHierarchyService,
  PlainNode,
} from '../../../features/services/file-hierarchy/file-hierarchy.service';

@Component({
  selector: 'input-directory',
  templateUrl: './input-directory.component.html',
  styleUrls: ['./input-directory.component.scss'],
})
export class InputDirectoryComponent {
  @ViewChild('inputFile', {read: ElementRef<HTMLInputElement>}) private inputFile!: ElementRef<HTMLInputElement>

  constructor(private fileHierarchyService: FileHierarchyService) {}

  handleOnChangeInput(event: any) {
    const files: File[] = [];
    for (let i = 0; i < event.target.files.length; i++) {
      const file: File = event.target.files.item(i);
      files.push(file);
    }
    this.fileHierarchyService.loadTree(files);
  }

  raiseInputFile() {
    this.inputFile.nativeElement.click()
  }
}

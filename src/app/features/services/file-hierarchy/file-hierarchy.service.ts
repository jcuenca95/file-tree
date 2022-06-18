import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { v4 } from 'uuid';
import { TreeNode } from '../../../core/interfaces/tree-node.interface';

export interface PlainNode extends Omit<TreeNode, 'children'> {
  parentId: TreeNode['id'] | undefined;
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FileHierarchyService {
  private _hierarchy$ = new BehaviorSubject<PlainNode[]>([]);
  private _selectedFile$ = new BehaviorSubject<TreeNode['id'] | undefined>(
    undefined
  );
  private loadedFiles: File[] = [];

  constructor() {}

  get hierarchy$(): Observable<PlainNode[]> {
    return this._hierarchy$.asObservable();
  }

  get selectedFile$(): Observable<TreeNode['id'] | undefined> {
    return this._selectedFile$.asObservable();
  }

  get selectedFileRef$(): Observable<File | undefined> {
    return this.selectedFile$.pipe(
      map((fileId) => {
        const nodeRef = this._hierarchy$.value.find(
          (node) => node.id === fileId
        );
        return this.loadedFiles.find((file) => file.name === nodeRef?.name);
      })
    );
  }

  createTreeFromPath(
    path: string[],
    hierarchy: PlainNode[] = [],
    parentId: TreeNode['id'] | undefined = undefined
  ): PlainNode[] {
    if (path.length === 0) {
      return hierarchy;
    }
    const nodeName = path[0];
    const fileRef = this.loadedFiles.find((file) => file.name === nodeName);
    const nodeRef = hierarchy.find((node) => node.name === nodeName);
    const id = nodeRef ? nodeRef.id : v4();
    if (!nodeRef) {
      hierarchy.push({
        isOpen: false,
        name: nodeName,
        type: fileRef ? 'file' : 'folder',
        parentId: parentId,
        id,
      });
    }
    path.shift();
    this.createTreeFromPath(path, hierarchy, id);
    return hierarchy;
  }

  loadTree(files: File[]): void {
    this.loadedFiles = files;
    const hierarchy: PlainNode[] = [];
    const paths = files.map(({ webkitRelativePath }) =>
      webkitRelativePath.split('/')
    );
    paths.forEach((path) => this.createTreeFromPath(path, hierarchy));

    this._hierarchy$.next(
      hierarchy.sort((node1, node2) => {
        if (node1.type === node2.type) return 0;
        if (node1.type === 'folder') return -1;
        if (node2.type === 'folder') return 1;
        return 0;
      })
    );
  }

  getElement(
    id: TreeNode['id'] | undefined
  ): Observable<PlainNode | undefined> {
    return this._hierarchy$.pipe(
      map((hierarchy) => hierarchy.find((element) => element.id === id))
    );
  }

  getChildren(parentId: TreeNode['id'] | undefined): Observable<PlainNode[]> {
    return this._hierarchy$.pipe(
      map((hierarchy) =>
        hierarchy.filter((element) => element.parentId === parentId)
      )
    );
  }

  selectFile(id: TreeNode['id']) {
    const selectedFile = this._selectedFile$.value;
    this._selectedFile$.next(id === selectedFile ? undefined : id);
  }

  toggleFolder(id: TreeNode['id']) {
    const hierarchy = this._hierarchy$.value;
    const index = hierarchy.findIndex(
      (node) => node.id === id && node.type === 'folder'
    );
    if (index >= 0) {
      hierarchy[index].isOpen = !hierarchy[index].isOpen;
      this._hierarchy$.next(hierarchy);
    }
  }
}

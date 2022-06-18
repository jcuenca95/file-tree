import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { TreeNode } from '../../../core/interfaces/tree-node.interface';

const mockHierarchy: TreeNode[] = [
  {
    id: '1',
    name: 'Folder 1',
    type: 'folder',
    children: [
      {
        id: '2',
        name: 'Subfolder 1',
        type: 'folder',
        children: [
          {
            id: '3',
            name: 'File 1',
            type: 'file',
          },
          {
            id: '4',
            name: 'File 1',
            type: 'file',
          },
        ],
      },
      {
        id: '5',
        name: 'Subfolder 2',
        type: 'folder',
        children: [
          {
            id: '6',
            name: 'File 2',
            type: 'file',
          },
        ],
      },
    ],
  },
  {
    id: '7',
    name: 'Folder 2',
    type: 'folder',
    children: [
      {
        id: '8',
        name: 'Subfolder 1',
        type: 'folder',
        children: [
          {
            id: '9',
            name: 'File 1',
            type: 'file',
          },
          {
            id: '10',
            name: 'File 1',
            type: 'file',
          },
        ],
      },
      {
        id: '11',
        name: 'Subfolder 2',
        type: 'folder',
        children: [
          {
            id: '12',
            name: 'File 2',
            type: 'file',
          },
        ],
      },
    ],
  },
];

export interface PlainNode extends Omit<TreeNode, 'children'> {
  parentId: TreeNode['id'] | undefined;
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FileHierarchyService {
  private _hierarchy$ = new BehaviorSubject<PlainNode[]>([]);
  private _selectedNode$ = new BehaviorSubject<TreeNode['id'] | undefined>(
    undefined
  );

  constructor() {
    this.loadTree(mockHierarchy);
  }

  get hierarchy$(): Observable<PlainNode[]> {
    return this._hierarchy$.asObservable();
  }

  get selectedNodes$(): Observable<TreeNode['id'] | undefined> {
    return this._selectedNode$.asObservable();
  }

  loadTree(tree: TreeNode[]): void {
    const nextHierarchy = this.createNodes(tree);
    this._hierarchy$.next(nextHierarchy);
  }

  private createNodes(
    treeNode: TreeNode[],
    treeMap: PlainNode[] = [],
    parentId: string | undefined = undefined
  ): PlainNode[] {
    const plainNodes = treeNode.map<PlainNode>(({ children, ...restNode }) => ({
      ...restNode,
      parentId,
      isOpen: false,
    }));
    treeMap.push(...plainNodes);

    treeNode.forEach((node) => {
      if (node.children) {
        this.createNodes(node.children, treeMap, node.id);
      }
    });

    return treeMap;
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
    this._selectedNode$.next(id);
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

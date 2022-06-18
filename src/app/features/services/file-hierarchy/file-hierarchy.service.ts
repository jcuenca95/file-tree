import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
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

interface PlainNode extends Omit<TreeNode, 'children'> {
  parentId: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class FileHierarchyService {
  private _hierarchy$ = new BehaviorSubject<PlainNode[]>([]);

  constructor() {
    this.loadTree(mockHierarchy);
  }

  get hierarchy$(): Observable<PlainNode[]> {
    return this._hierarchy$.asObservable();
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
    id: string
  ): Observable<{ element: PlainNode | undefined; children: PlainNode[] }> {
    return this._hierarchy$.pipe(
      map((hierarchy) => {
        return {
          children: hierarchy.filter((element) => element.parentId === id),
          element: hierarchy.find((element) => element.id === id),
        };
      })
    );
  }
}

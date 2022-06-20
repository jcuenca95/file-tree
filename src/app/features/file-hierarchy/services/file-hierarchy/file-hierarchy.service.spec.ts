import { TestBed } from '@angular/core/testing';

import { FileHierarchyService } from './file-hierarchy.service';

const createMockedFiles = (paths: string[]) => {
  return paths.map(path => {
    const splittedPath = path.split('/');
    const fileName = splittedPath[splittedPath.length - 1];
    const file = new File(['askijhdaskjhf'], fileName);
    return { ...file, webkitRelativePath: path }
  })
}

describe('FileHierarchyService', () => {
  let service: FileHierarchyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileHierarchyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getChildren should return 2 folders and 1 file and 1 file in first folder', () => {
    const mockedFiles = createMockedFiles([
      'folder/image.png',
      'folder1/image1.png',
      'image2.png',
    ]);
    service.loadTree(mockedFiles)
    service.getChildren().subscribe((nodes) => {
      const fileNodes = nodes.filter(node => node.type === 'file');
      const folderNodes = nodes.filter(node => node.type === 'folder');
      expect(fileNodes.length).toBe(1);
      expect(folderNodes.length).toBe(2);
      service.getChildren(folderNodes[0].id).subscribe(children => {
        const fileChildren = nodes.filter(node => node.type === 'file');
        expect(fileChildren.length).toBe(1)
      });
    });
  });



});

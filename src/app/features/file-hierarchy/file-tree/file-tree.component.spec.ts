import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FileHierarchyService, PlainNode } from '../services/file-hierarchy/file-hierarchy.service';

import { FileTreeComponent } from './file-tree.component';

class MockedFileHierarchyService {
  returnElement: PlainNode | undefined;
  returnChildren: PlainNode[] = []
  getElement: FileHierarchyService['getElement'] = () => of(this.returnElement);
  getChildren: FileHierarchyService['getChildren'] = () => of(this.returnChildren);
}

describe('FileTreeComponent', () => {
  let component: FileTreeComponent;
  let fixture: ComponentFixture<FileTreeComponent>;
  let mockFileHierarchyService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileTreeComponent],
      providers: [{
        provide: FileHierarchyService,
        useClass: MockedFileHierarchyService
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FileTreeComponent);
    component = fixture.componentInstance;
    mockFileHierarchyService = TestBed.inject(FileHierarchyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should show 2 folders and 1 file', () => {
    mockFileHierarchyService.returnElement = undefined;
    mockFileHierarchyService.returnChildren = [
      {
        id: '1',
        name: 'a',
        type: 'folder',
        parentId: undefined
      },
      {
        id: '1',
        name: 'a',
        type: 'folder',
        parentId: undefined
      },
      {
        id: '1',
        name: 'a',
        type: 'file',
        parentId: undefined
      }
    ];
    const fixtureD = TestBed.createComponent(FileTreeComponent);
    component = fixtureD.componentInstance;
    fixtureD.detectChanges();
    const divDeb = fixtureD.debugElement.query(By.css('div'));
    expect(divDeb.nativeElement.children.length).toBe(3)
  });
  */
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileHierarchyService } from '../../services/file-hierarchy/file-hierarchy.service';

import { FileNodeComponent } from './file-node.component';

describe('FileNodeComponent', () => {
  let component: FileNodeComponent;
  let fixture: ComponentFixture<FileNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileNodeComponent ],
      providers: [FileHierarchyService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileNodeComponent);
    component = fixture.componentInstance;
    component.node = {
      id: "1",
      isOpen: false,
      name: "Folder Mock",
      parentId: undefined,
      type: 'folder'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

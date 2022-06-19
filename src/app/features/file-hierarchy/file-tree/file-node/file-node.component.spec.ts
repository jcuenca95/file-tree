import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FileHierarchyService } from '../../services/file-hierarchy/file-hierarchy.service';

import { FileNodeComponent } from './file-node.component';

describe('FileNodeComponent', () => {
  let component: FileNodeComponent;
  let fixture: ComponentFixture<FileNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileNodeComponent],
      providers: [FileHierarchyService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  it('should show node name', () => {
    const pDeb = fixture.debugElement.query(By.css('p'));
    const p: HTMLParagraphElement = pDeb.nativeElement;
    expect(p.textContent?.includes(component.node.name)).toBe(true)
  });


  it('should show folder icon', () => {
    expect(component.icon).toBe('folder');
  });

  it('should show folder open icon', () => {
    component.node.isOpen = true;
    fixture.detectChanges()
    expect(component.icon).toBe('folder_open');
  });

  it('should show file icon', () => {
    component.node.name = 'file.txt';
    component.node.type = 'file';
    fixture.detectChanges()
    expect(component.icon).toBe('description');
  });

  it('should show audio file icon', () => {
    component.node.name = 'file.mp3';
    component.node.type = 'file';
    fixture.detectChanges()
    expect(component.icon).toBe('audio_file');
  });

  it('should show video file icon', () => {
    component.node.name = 'file.mp4';
    component.node.type = 'file';
    fixture.detectChanges()
    expect(component.icon).toBe('video_file');
  });

  it('should show image file icon', () => {
    component.node.name = 'file.jpg';
    component.node.type = 'file';
    fixture.detectChanges()
    expect(component.icon).toBe('image');
  });
});

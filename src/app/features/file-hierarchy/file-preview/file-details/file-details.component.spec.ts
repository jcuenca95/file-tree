import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxFilesizeModule } from 'ngx-filesize';

import { FileDetailsComponent } from './file-details.component';

describe('FileDetailsComponent', () => {
  let component: FileDetailsComponent;
  let fixture: ComponentFixture<FileDetailsComponent>;
  const mockedFile = new File([], 'x.jpg');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileDetailsComponent],
      imports: [NgxFilesizeModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FileDetailsComponent);
    component = fixture.componentInstance;
    component.file = mockedFile
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show file name', () => {
    const paragraphDeb = fixture.debugElement.query(By.css('p'));
    const p: HTMLParagraphElement = paragraphDeb.nativeElement;
    expect(p.textContent).toBe(`${mockedFile.name} ${mockedFile.size} B\n`)
  });

});

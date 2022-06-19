import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFilesizeModule } from 'ngx-filesize';

import { FileDetailsComponent } from './file-details.component';

describe('FileDetailsComponent', () => {
  let component: FileDetailsComponent;
  let fixture: ComponentFixture<FileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDetailsComponent ],
      imports: [NgxFilesizeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDetailsComponent);
    component = fixture.componentInstance;
    component.file = new File([], 'x.jpg');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

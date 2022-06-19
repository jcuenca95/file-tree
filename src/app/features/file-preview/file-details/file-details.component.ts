import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss'],
})
export class FileDetailsComponent {
  @Input() file!: File;
}

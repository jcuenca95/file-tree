import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-directory',
  templateUrl: './input-directory.component.html',
  styleUrls: ['./input-directory.component.scss'],
})
export class InputDirectoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleOnChangeInput(event: any) {
    console.log(event.target.files);
  }
}

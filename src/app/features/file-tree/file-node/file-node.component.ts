import { Component, Input } from '@angular/core';
import { PlainNode } from '../../services/file-hierarchy/file-hierarchy.service';

@Component({
  selector: 'file-node',
  templateUrl: './file-node.component.html',
  styleUrls: ['./file-node.component.scss'],
})
export class FileNodeComponent {
  @Input() node!: PlainNode;
  constructor() {}
}

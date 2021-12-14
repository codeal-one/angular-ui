import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { extractMath, Segment } from "extract-math";

@Component({
  selector: 'nt-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnChanges {

  chunks: Segment[] = [];
  @Input() content: string = '';
  @Input() debug: boolean = false;
  @Output() error: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(): void {
    this.chunks = extractMath(this.content);
  }
}

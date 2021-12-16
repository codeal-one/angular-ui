import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { extractMath } from "extract-math";

/**
 * This is a rich paragraph which may contain mathematical expressions, image, text, and so on.
 */
@Component({
  selector: 'nt-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnChanges {

  /**
   * The internal chunks extracted from the content
   */
  chunks: any[] = [];

  /**
   * The raw content of the paragraph
   */
  @Input() content: string = '';

  /**
   * Enabling debug mode in which the error message will be printed out in case of math syntax errors
   */
  @Input() debug: boolean = false;

  /**
   * The event that will be emitted in case of errors
   */
  @Output() error: EventEmitter<any> = new EventEmitter<any>();

  /**
   * The internal processing of property changes
   */
  ngOnChanges(): void {
    this.chunks = extractMath(this.content);
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'one-button',
  templateUrl: './one-button.component.html',
  styleUrls: ['./one-button.component.sass']
})
export class OneButtonComponent implements OnInit {

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  @Output() click = new EventEmitter<any>();

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  constructor() { }

  ngOnInit(): void {
    this.label = 'Button'
  }

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}

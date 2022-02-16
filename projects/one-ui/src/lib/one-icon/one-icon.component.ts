import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'one-icon',
  templateUrl: './one-icon.component.html',
  styleUrls: ['./one-icon.component.css']
})
export class OneIconComponent implements OnChanges {
  /**
   * Font-Awesome Icon
   *
   * @optional
   */
  @Input() faIcon: string = '';

  /**
   * decoration classes for the icon
   */
  classes: any[] = [];

  /**
   * update decoration classes on change
   */
  ngOnChanges(): void {
    if (this.faIcon !== '') {
      this.classes.splice(0, this.classes.length);
      this.classes.push('fa', `fa-${this.faIcon}`);
    }
  }
}

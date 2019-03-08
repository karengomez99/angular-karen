import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() props: {
    dropdownArray: [];
    dropdownPlaceholder: string;
    isDisabled: boolean;
    requiredField: boolean
  };

  constructor() { }
}

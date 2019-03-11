import { Component, Input, OnInit } from '@angular/core';
import { PromiseType } from 'protractor/built/plugins';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() dropdownProperties: {
    dropdownArray: [];
    dropdownPlaceholder: string;
    isDisabled: boolean;
    requiredField: boolean;
    defaultValue: string;
  };

  selectedOption: string;

  constructor() {}

  onChange(value) {
    this.selectedOption = value;
  }

  ngOnInit() {
    this.selectedOption = this.dropdownProperties.defaultValue;
  }
}

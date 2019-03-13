import { Component, Input, OnInit } from '@angular/core';
import { PromiseType } from 'protractor/built/plugins';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public isMobile : boolean = false;

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
    console.log(window.screen.width);
    if(window.screen.width < 740){
      this.isMobile = true;
    }
    this.selectedOption = this.dropdownProperties.defaultValue;
  }
}

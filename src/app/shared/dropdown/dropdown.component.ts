import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() dropdownArray = [];

  constructor() { }

  ngOnInit() {
  }

}

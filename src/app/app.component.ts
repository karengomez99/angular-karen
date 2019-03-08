import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private myProps = {
    dropdownArray: ['Cuenta perfiles', 'Tarjeta de crédito', 'Seguros de vida'], 
    dropdownPlaceholder: 'Selecciona el tipo de producto',
    isDisabled: false,
    requiredField : false,
    defaultValue: 'defaultValue'
  }
}

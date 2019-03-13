import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService){}

  throwError(){
    let foo = null;
    foo.slice();
    // let foo = () => { console.log('soy recursivo'); foo() }
    // foo();
  }

  throwHttpError(){
    this.appService.getAllPost().subscribe(data => console.log('data', data));
  }

}

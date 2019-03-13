import { GlobalErrorHandler } from './shared/errorHandler/error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { InterceptorHandlerService } from './shared/errorHandler/interceptor-handler.interceptor';
import { ErrorService } from './shared/services/error-service.service';
import { NotificationService } from './shared/services/notification-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ErrorService,
    NotificationService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
   /* { provide: HTTP_INTERCEPTORS, useClass: InterceptorHandlerService, multi: true }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

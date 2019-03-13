import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/error-service.service';
import { NotificationService } from '../services/notification-service.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private errorService : ErrorService, private notifier : NotificationService) { }

  handleError(error: Error | HttpErrorResponse): void {
    let message;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = this.errorService.getServerErrorMessage(error);
      this.notifier.showError(message);
    } else {
      // Client Error
      message = this.errorService.getClientErrorMessage(error);
      this.notifier.showError(message);
    }
    console.error(error);
  }
}
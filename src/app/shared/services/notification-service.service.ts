import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }

  showSuccess(message: string): void {
        alert(message);
  }

  showError(message: string): void {
      alert(message);
  }
}
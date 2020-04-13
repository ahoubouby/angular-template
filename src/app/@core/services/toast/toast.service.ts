import { Injectable } from '@angular/core';
import { Status } from '@shared/dto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  subject = new Subject();
  constructor() {}
  displayToast(message: string, status: string) {
    console.log('displayToast');
    this.subject.next({ message, status });
  }

  success(message: string) {
    this.subject.next({ message, status: Status.SUCCESS });
  }

  warning(message: string) {
    this.subject.next({ message, status: Status.WARNING });
  }

  error(message: string) {
    this.subject.next({ message, status: Status.ERROR });
  }
}

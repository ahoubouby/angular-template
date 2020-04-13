import { Component, OnInit } from '@angular/core';
import { ToastService } from '@app/@core/services';
import { ToastData } from '@shared/dto';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  items: any[];
  constructor(private _toastService: ToastService) {
    this.items = [];
  }

  ngOnInit(): void {
    this._toastService.subject.subscribe((data: ToastData) => {
      this.items.push(data);
      setTimeout(() => this.close(Array.prototype.lastIndexOf(this.items)), 5000);
    });
  }

  close(i: number) {
    this.items.splice(i, 1);
  }

  trackByFn(index: number) {
    return index;
  }
}

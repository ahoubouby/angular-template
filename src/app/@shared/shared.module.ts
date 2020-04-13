import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ToastComponent],
  exports: [LoaderComponent],
})
export class SharedModule {}

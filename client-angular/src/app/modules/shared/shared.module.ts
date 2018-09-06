import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './directives/infinite-scroll/infinite-scroll.directive';
import {AuthService} from "../../services/auth/auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfiniteScrollDirective],
  exports: [
    InfiniteScrollDirective,
  ],
  providers: [AuthService]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    // SHARED MODULES
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // SHARED COMPONENTS
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FeatureSalesComponent } from './feature-sales.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  declarations: [FeatureSalesComponent],
  exports: [CommonModule, FeatureSalesComponent, MatTableModule, MatCheckboxModule]
})
export class FeatureSalesModule { }

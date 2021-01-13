import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { FeatureSalesComponent } from './feature-sales.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  declarations: [FeatureSalesComponent],
  exports: [CommonModule, FeatureSalesComponent, MatTableModule, MatCheckboxModule]
})
export class FeatureSalesModule { }

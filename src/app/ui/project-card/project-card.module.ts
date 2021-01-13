import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './project-card.component';

@NgModule({
    imports: [CommonModule, MatButtonModule, FontAwesomeModule],
    declarations: [ProjectCardComponent],
    exports: [ProjectCardComponent],
})
export class ProjectCardModule {
}
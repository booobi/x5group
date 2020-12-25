import { CommonModule } from '@angular/common';
import { Input, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './project-card.component';

@NgModule({
    imports: [CommonModule, FontAwesomeModule],
    declarations: [ProjectCardComponent],
    exports: [ProjectCardComponent],
})
export class ProjectCardModule {
}
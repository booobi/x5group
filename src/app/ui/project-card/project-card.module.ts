import { CommonModule } from '@angular/common';
import { Input, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './project-card.component';

@NgModule({
    imports: [CommonModule, FontAwesomeModule],
    declarations: [ProjectComponent],
    exports: [ProjectComponent],
})
export class ProjectModule {
}
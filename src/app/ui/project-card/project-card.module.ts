import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './project-card.component';

@NgModule({
	imports: [CommonModule, MatButtonModule, MatCardModule, FontAwesomeModule],
	declarations: [ProjectCardComponent],
	exports: [ProjectCardComponent, MatButtonModule, MatCardModule, FontAwesomeModule],
})
export class ProjectCardModule {}
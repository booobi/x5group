import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent }
]
@NgModule({
    declarations: [
        HomeComponent,
        ProjectsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        MatCardModule,
        MatButtonModule,
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

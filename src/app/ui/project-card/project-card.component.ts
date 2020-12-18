import { Component, Input, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { Project } from 'src/app/infrastructure/types/project';
import { projecStatusDisplayNamesMap } from './project-card.config';

@Component({
    selector: 'project',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectComponent implements OnInit {
    readonly projecStatusDisplayNamesMap = projecStatusDisplayNamesMap;
    readonly faFacebookSquare = faFacebookSquare;

    @Input() project: Project;

    constructor() { }

    ngOnInit() {
    }

}

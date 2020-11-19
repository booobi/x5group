import { Component, OnInit } from '@angular/core';
import { Project } from './projects.types';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [{
        name: 'Сграда 1, комплекс "Магнолия"',
        description: 'Комплекс "Магнолия". В строеж.Етап- АКТ 15. Изпълнител- КМК Билдинг груп',
        thumbnailUrl: 'https://scontent.fsof9-1.fna.fbcdn.net/v/t31.0-8/11703421_469350523266897_617694295842842594_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e007fa&_nc_ohc=7dtOPo5PRyQAX-GYKlC&_nc_ht=scontent.fsof9-1.fna&oh=75c73d22e6048e7c07747f03b49a3b92&oe=5FD58E1C',
    },
    {
        name: 'Сграда 1, комплекс "Магнолия"',
        description: 'Комплекс "Магнолия". В строеж.Етап- АКТ 15. Изпълнител- КМК Билдинг груп',
        thumbnailUrl: 'https://scontent.fsof9-1.fna.fbcdn.net/v/t31.0-8/11703421_469350523266897_617694295842842594_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e007fa&_nc_ohc=7dtOPo5PRyQAX-GYKlC&_nc_ht=scontent.fsof9-1.fna&oh=75c73d22e6048e7c07747f03b49a3b92&oe=5FD58E1C',
    },
    {
        name: 'Сграда 1, комплекс "Магнолия"',
        description: 'Комплекс "Магнолия". В строеж.Етап- АКТ 15. Изпълнител- КМК Билдинг груп',
        thumbnailUrl: 'https://scontent.fsof9-1.fna.fbcdn.net/v/t31.0-8/11703421_469350523266897_617694295842842594_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e007fa&_nc_ohc=7dtOPo5PRyQAX-GYKlC&_nc_ht=scontent.fsof9-1.fna&oh=75c73d22e6048e7c07747f03b49a3b92&oe=5FD58E1C',
    },
    {
        name: 'Сграда 1, комплекс "Магнолия"',
        description: 'Комплекс "Магнолия". В строеж.Етап- АКТ 15. Изпълнител- КМК Билдинг груп',
        thumbnailUrl: 'https://scontent.fsof9-1.fna.fbcdn.net/v/t31.0-8/11703421_469350523266897_617694295842842594_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e007fa&_nc_ohc=7dtOPo5PRyQAX-GYKlC&_nc_ht=scontent.fsof9-1.fna&oh=75c73d22e6048e7c07747f03b49a3b92&oe=5FD58E1C',
    }]


    constructor() { }

    ngOnInit() {
    }

}

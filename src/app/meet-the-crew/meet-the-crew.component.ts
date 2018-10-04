import { Component, OnInit } from '@angular/core';
import { Crew } from './crew.model';






@Component({
    selector: 'app-meet-the-crew',
    templateUrl: './meet-the-crew.component.html',
    styleUrls: ['./meet-the-crew.component.scss'],

})
export class MeetTheCrewComponent implements OnInit {

    public crew: Crew[] = [
        { "name": "Megan Willard", "url": "assets/images/megan.jpg", "id": "#meganModal", "link": "/megan-willard" },
        { "name": "Catherine Minor-Nidey", "url": "assets/images/cat.jpg", "id": "#catModal", "link": "/cat-minor"  },
        { "name": "Margaret Koenig", "url": "assets/images/margaret.jpg", "id": "#margaretModal", "link": "/megan-willard"  },
        { "name": "Wanda Fennern", "url": "assets/images/wonda.jpg", "id": "#wandaModal", "link": "/megan-willard"  },
        { "name": "Jeri Halperin", "url": "assets/images/jerry.jpg", "id": "#jeriModal", "link": "/jeri-halperin"  },
        { "name": "Lisa Stark", "url": "assets/images/lisa.jpeg", "id": "#lisaModal", "link": "/megan-willard"  },
        { "name": "Alexis Russell", "url": "assets/images/alexis.jpg", "id": "#alexisModal", "link": "/alexis-russell"  },
        { "name": "Seanna Feijo", "url": "assets/images/seanna.jpg", "id": "#seannaModal", "link": "/megan-willard"  }
    ];

    constructor() { }

    ngOnInit() {

    }





}
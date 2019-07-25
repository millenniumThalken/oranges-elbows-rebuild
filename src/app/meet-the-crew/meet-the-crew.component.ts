import { Component, OnInit } from '@angular/core';
import { Crew } from './crew.model';






@Component({
    selector: 'app-meet-the-crew',
    templateUrl: './meet-the-crew.component.html',
    styleUrls: ['./meet-the-crew.component.scss'],

})
export class MeetTheCrewComponent implements OnInit {

    public crew: Crew[] = [
        { "name": "Megan Willard", "url": "assets/images/megan.jpg", "id": "#meganModal", "link": "/profiles/megan-willard" },
        { "name": "Catherine Minor-Nidey", "url": "assets/images/cat.jpg", "id": "#catModal", "link": "/profiles/cat-minor"  },
        { "name": "Wanda Fennern", "url": "assets/images/wonda.jpg", "id": "#wandaModal", "link": "/profiles/wanda-fennern"  },
        { "name": "Lisa Stark", "url": "assets/images/lisa.jpeg", "id": "#lisaModal", "link": "/profiles/lisa-stark"  },
        { "name": "Ananya Pramanik", "url": "assets/images/ananya.jpg", "id": "#ananyaModal", "link": "/profiles/ananya-pramanik"  },
        { "name": "Alyssa Hefel", "url": "assets/images/alyssa.jpeg", "id": "#alyssaModal", "link": "/profiles/alyssa-hefel"  },
    ];

    constructor() { }

    ngOnInit() {

    }





}
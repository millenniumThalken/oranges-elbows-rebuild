import { Component, OnInit } from '@angular/core';
import { Locations } from './locations.model';

@Component({
    selector: 'app-ggmaps',
    templateUrl: './ggmaps.component.html',
    styleUrls: ['./ggmaps.component.scss']
})
export class GgmapsComponent implements OnInit {
    title: string = 'Areas We Serve';
    //zoom: number = 2;
    start_lat: number = 41.661127700;
    start_long: number = -91.530168300
    public locations: Locations[] = [
        { "title": "Iowa City", "lat": 41.661127700, "long": -91.530168300 },
        { "title": "Coralville", "lat": 41.6978658, "long": -91.597952 },
        { "title": "North Liberty", "lat": 41.7439604, "long": -91.614671 }
    ];


    constructor() { }

    ngOnInit() {
    }

}

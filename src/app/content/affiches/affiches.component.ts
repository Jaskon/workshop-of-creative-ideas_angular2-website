import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-affiches',
    templateUrl: './affiches.component.html',
    styleUrls: ['./affiches.component.scss']
})
export class AffichesComponent implements OnInit {

    affiches: [{title: string, img: string, link: string, description: string}];

    constructor() { }

    ngOnInit() {
        this.affiches = [
            {title: 'Title 1', img: 'img 1', link: 'link-1', description: 'Description 1 12321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 1'},
            {title: 'Title 2', img: 'img 2', link: 'link-2', description: 'Description 2'},
            {title: 'Title 3', img: 'img 3', link: 'link-3', description: 'Description 3'},
            {title: 'Title 4', img: 'img 4', link: 'link-4', description: 'Description 4'},
            {title: 'Title 5', img: 'img 5', link: 'link-5', description: 'Description 5'}
        ];
    }

}

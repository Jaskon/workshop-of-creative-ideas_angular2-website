import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-affiche',
    templateUrl: './affiche.component.html',
    styleUrls: ['./affiche.component.scss']
})
export class AfficheComponent implements OnInit {

    affiche: any = {};

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.affiche.id = this.route.params['id'];
    }
}

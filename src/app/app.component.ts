import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { GlobalObject } from 'app/Globals/GlobalObject';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['/app.menu.scss', './app.component.scss']
})
export class AppComponent implements OnInit {
    activeBackground: number = 1;
    menuOpened: boolean = false;

    // For theme changing
    // routes - what routes will initiate theme changing of the page
    menuItems = [
        { numb: 1, text: 'Афиша', link: 'affiches', routes: ['/affiches', '/affiche/'], background: 1 },
        { numb: 2, text: 'Проекты', link: 'projects', routes: ['/projects', '/project/'], background: 1 },
        { numb: 3, text: 'Fools funny crew', link: 'fools-funny-crew', routes: ['/fools-funny-crew'], background: 1 },
        { numb: 4, text: 'Теплообмен', link: 'teploobmen', routes: ['/teploobmen'], background: 1 },
        { numb: 5, text: 'Детская студия эстетического развития', link: 'detskaya-studiya-esteticheskogo-razvitiya',
            routes: ['/detskaya-studiya-esteticheskogo-razvitiya'], background: 2 },
        { numb: 6, text: 'Хореография для всех', link: 'horeografiya', routes: ['/horeografiya'], background: 3 }
    ];

    // This one changes when clicking on the menu item
    headerTitles = [
        { numb: 1, text: 'Афиша', state: 0 },
        { numb: 2, text: 'Проекты', state: 1 },
        { numb: 3, text: 'Fools funny crew', state: 2 },
        { numb: 4, text: 'Теплообмен', state: 3 },
        { numb: 5, text: 'Детская студия эстетического развития', state: 4 },
        { numb: 6, text: 'Хореография для всех', state: 5 }
    ];

    constructor(private router: Router) { 
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                for (var i = 0; i < this.menuItems.length; i++)
                    for (var j = 0; j < this.menuItems[i].routes.length; j++)
                        if (event.urlAfterRedirects.startsWith(this.menuItems[i].routes[j])) {
                            console.log(this.menuItems[i].link);
                            this.menuItemClicked(this.menuItems[i]);
                        }
            }
        })
    }

    ngOnInit()  {
        window.onload = () => { GlobalObject.FontResize(); };
        window.onresize = () => { GlobalObject.FontResize(); };
    }

    openMenu() {
        this.menuOpened = !this.menuOpened;
    }

    menuItemClicked(menuItem) {
        this.activeBackground = menuItem.background;
        var newHeaderTitles = [];
        var headerTitleWithNumb;
        var iMin = menuItem.numb >= this.menuItems.length ? 1 : menuItem.numb + 1;
        for (var i = iMin, j = 0; /*i != menuItem.numb;*/ j < this.headerTitles.length; i++, j++) {
            for (var i1 = 0; i1 < this.headerTitles.length; i1++) {
                if (this.headerTitles[i1].numb === i) {
                    headerTitleWithNumb = this.headerTitles[i1];
                    break;
                }
            }
            newHeaderTitles[j] = headerTitleWithNumb;

            if (i >= this.headerTitles.length)
                i = 0;
        }
        this.headerTitles = newHeaderTitles;
    }
}

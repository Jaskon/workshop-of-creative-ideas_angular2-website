import { Component, OnInit } from '@angular/core';
import { GlobalObject } from 'app/Globals/GlobalObject';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['/app.menu.scss', './app.component.scss']
})
export class AppComponent implements OnInit {
    activeBackground: number = 1;
    menuOpened: boolean = false;

    menuItems = [
        { numb: 1, text: 'Афиша', link: '', background: 1},
        { numb: 2, text: 'Проекты', link: '', background: 1},
        { numb: 3, text: 'Fools funny crew', link: '', background: 1},
        { numb: 4, text: 'Теплообмен', link: '', background: 1},
        { numb: 5, text: 'Детская студия эстетического развития', link: '', background: 2},
        { numb: 6, text: 'Хореография для всех', link: '', background: 3}
    ];

    ngOnInit()  {
        window.onload = () => { GlobalObject.FontResize(); };
        window.onresize = () => { GlobalObject.FontResize(); };
    }

    openMenu() {
        this.menuOpened = !this.menuOpened;
    }

    menuItemClicked(menuItem) {
        this.activeBackground = menuItem.background;
    }

    changeBackground(numb) {
        this.activeBackground = numb
    }
}

import {Component} from '@angular/core';
import {defaultIcon} from '../common/constants';
import {getIconClass, getIconList} from '../common/util-functions';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.css']
})
export class IconMenuComponent {

  chosenIcon = defaultIcon;
  isMenuShown = false;

  getIconList = getIconList;
  getIconClass = getIconClass;

  constructor() {
  }

  openMenu(): void {
    this.isMenuShown = !this.isMenuShown;
  }

  changeChosen(iconName: string): void {
    this.chosenIcon = iconName;
    this.isMenuShown = !this.isMenuShown;
  }
}

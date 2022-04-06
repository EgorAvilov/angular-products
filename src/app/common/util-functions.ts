import {icons} from './constants';

export function getIconList(chosenIcon: string): string[] {
  return Object.keys(icons).filter(el => el !== chosenIcon);
}

export function getIconClass(iconName: string): string {
  return icons[iconName];
}

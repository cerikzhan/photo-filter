import { BaseComponent } from '../base-component';

export function Header(parentNode) {
  const header = new BaseComponent(parentNode, 'header', { class: 'header' });
  // eslint-disable-next-line no-new
  new BaseComponent(header.element, 'h1', { class: 'header-title' }, 'Photo Filter');
}

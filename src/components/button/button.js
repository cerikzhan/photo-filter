import { BaseComponent } from '../base-component';

export class Button extends BaseComponent {
  constructor(parentNode, cls, caption) {
    super(parentNode, 'button', { class: cls }, caption);
    this.element.onclick = () => {
      if (this.onClick) {
        this.onClick();
      }
    };
  }
}

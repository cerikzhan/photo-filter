import { BaseComponent } from '../base-component';
import { Label } from '../label/label';

export class Filter extends BaseComponent {
  constructor(parentNode) {
    super(parentNode, 'div', { class: 'filters' });
    this.blur = new Label(this.element, 'blur', 'px', 10, 0);
    this.invert = new Label(this.element, 'invert', '%', 100, 0);
    this.sepia = new Label(this.element, 'sepia', '%', 100, 0);
    this.saturate = new Label(this.element, 'saturate', '%', 200, 100);
    this.hueRotate = new Label(this.element, 'hue', 'deg', 360, 0);
  }

  getLabels() {
    return [
      this.blur,
      this.invert,
      this.sepia,
      this.saturate,
      this.hueRotate,
    ];
  }
}

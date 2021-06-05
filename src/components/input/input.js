import { BaseComponent } from '../base-component';

export class Input extends BaseComponent {
  constructor(parentNode, name, unitMeasure, max, value) {
    super(parentNode, 'input', {
      name, 'data-sizing': unitMeasure, type: 'range', min: 0, max, value,
    });
    this.name = name;
    this.element.oninput = () => {
      if (this.onInput) {
        this.onInput();
      }
    };
  }
}

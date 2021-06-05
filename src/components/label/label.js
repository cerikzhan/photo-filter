import { BaseComponent } from '../base-component';
import { Input } from '../input/input';

export class Label extends BaseComponent {
  constructor(parentNode, name, unitMeasure, max, value) {
    super(parentNode, 'label', {}, `${name}: `);
    this.name = name;
    this.unitMeasure = unitMeasure;
    this.value = value;
    this.input = new Input(this.element, this.name, unitMeasure, max, this.value);
    this.output = new BaseComponent(this.element, 'output', { name: 'result' }, `${this.value}`);

    this.input.onInput = () => {
      this.value = this.input.element.value;
      this.inputChangeHandler(this.value);
    };
  }

  inputChangeHandler(value) {
    this.input.element.value = value;
    this.output.element.value = `${value}`;
    document.documentElement.style.setProperty(`--${this.name}`, `${value}${this.unitMeasure}`);
  }
}

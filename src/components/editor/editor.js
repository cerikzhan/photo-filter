import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import { ImageComponent } from '../image/image';

import { Canvas } from '../canvas/canvas';

export class Editor extends BaseComponent {
  constructor(parentNode) {
    super(parentNode, 'div', { class: 'editor' });
    const btnContainer = new BaseComponent(this.element, 'div', { class: 'btn-container' });
    this.resetBtn = new Button(btnContainer.element, 'btn btn-reset', 'Reset');
    this.nextBtn = new Button(btnContainer.element, 'btn btn-next btn-active', 'Next picture');
    this.label = new BaseComponent(
      btnContainer.element,
      'label',
      { class: 'btn btn-load', for: 'btnInput' },
      'Load picture',
    );
    this.loadBtn = new BaseComponent(
      this.label.element,
      'input',
      {
        class: 'btn-load--input', id: 'btnInput', name: 'upload', type: 'file', placeholder: 'Load picture',
      },
    );
    this.saveBtn = new Button(btnContainer.element, 'btn btn-save', 'Save picture');
    this.image = new ImageComponent(this.element);
    this.canvas = new Canvas(this.element);
  }

  getButtons() {
    return [
      this.resetBtn,
      this.nextBtn,
      this.label,
      this.saveBtn,
    ];
  }
}

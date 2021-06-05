import { BaseComponent } from '../base-component';
import { Editor } from '../editor/editor';
import { Filter } from '../filter/filter';

export class Main extends BaseComponent {
  constructor(parentNode) {
    super(parentNode, 'main', { class: 'main' });
    this.filters = new Filter(this.element);
    this.editor = new Editor(this.element);

    this.editor.resetBtn.onClick = () => {
      this.resetFilters();
      this.toggleButtons(this.editor.resetBtn);
    };

    this.editor.nextBtn.onClick = () => {
      this.resetFilters();
      this.toggleButtons(this.editor.nextBtn);
      this.editor.image.getPicture();
    };

    this.editor.loadBtn.element.onchange = () => {
      this.resetFilters();
      this.toggleButtons(this.editor.label);

      const file = this.editor.loadBtn.element.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        this.editor.image.element.src = reader.result;
      };
      reader.readAsDataURL(file);
      this.editor.loadBtn.element.value = '';
    };

    this.editor.saveBtn.onClick = () => {
      this.editor.canvas.savePicture(this.editor.image.element, this.filters.getLabels());
    };
  }

  resetFilters() {
    this.filters.getLabels().forEach((label) => {
      const value = label.name === 'saturate' ? '100' : '0';
      label.inputChangeHandler(value);
    });
  }

  toggleButtons(btn) {
    this.editor.getButtons().forEach((button) => {
      if (button.element.classList.contains('btn-active')) {
        button.element.classList.remove('btn-active');
      }
    });
    btn.element.classList.add('btn-active');
  }
}

import { BaseComponent } from '../base-component';

export class Canvas extends BaseComponent {
  constructor(parentNode) {
    super(parentNode, 'canvas', { class: 'editor-canvas' });
  }

  savePicture(image, labels) {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = image.src;

    const obj = {};

    labels.forEach((label) => {
      obj[label.input.element.name] = label.input.element.value;
    });

    img.onload = () => {
      this.element.width = img.width;
      this.element.height = img.height;
      const ctx = this.element.getContext('2d');

      if (img.width > img.height) {
        obj.blur *= (img.width / image.width);
      } else {
        obj.blur *= (img.height / image.height);
      }

      // eslint-disable-next-line max-len
      ctx.filter = `blur(${obj.blur}px) invert(${obj.invert}%) sepia(${obj.sepia}%) saturate(${obj.saturate}%) hue-rotate(${obj.hue}deg)`;
      ctx.drawImage(img, 0, 0);

      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = this.element.toDataURL();
      a.download = `image-${new Date().getTime()}.png`;
      a.click();
      document.body.removeChild(a);
    };
  }
}

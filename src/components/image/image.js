import { BaseComponent } from '../base-component';
import startImage from '../../assets/img/img.jpg';

export class ImageComponent extends BaseComponent {
  constructor(parentNode) {
    super(parentNode, 'img', { src: startImage, alt: 'image' });
    this.baseUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images';
    this.images = [
      '01.jpg', '02.jpg', '03.jpg', '05.jpg',
      '06.jpg', '07.jpg', '08.jpg', '09.jpg',
      '10.jpg', '11.jpg', '12.jpg', '13.jpg',
      '14.jpg', '15.jpg', '16.jpg', '17.jpg',
      '18.jpg', '19.jpg', '20.jpg',
    ];
    this.dayTime = 'morning';
    this.imageIndex = 0;
  }

  getDayTime() {
    const hours = new Date().getHours();
    if (hours >= 6 && hours <= 11) this.dayTime = 'morning';
    else if (hours >= 12 && hours <= 17) this.dayTime = 'day';
    else if (hours >= 18 && hours <= 23) this.dayTime = 'evening';
    else this.dayTime = 'night';
  }

  getPicture() {
    this.getDayTime();
    const i = this.imageIndex % this.images.length;
    const imageSrc = `${this.baseUrl}/${this.dayTime}/${this.images[i]}`;
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      this.element.src = imageSrc;
    };
    this.imageIndex++;
  }
}

export class BaseComponent {
  constructor(parentNode = null, tag = 'div', attrs = {}, content = '') {
    this.element = document.createElement(tag);
    this.element.innerHTML = `${content}`;

    const keys = Object.keys(attrs);
    for (let i = 0; i < keys.length; i++) {
      this.element.setAttribute(keys[i], attrs[keys[i]]);
    }
    if (parentNode) {
      parentNode.appendChild(this.element);
    }
  }

  destroy() {
    this.element.remove();
  }
}

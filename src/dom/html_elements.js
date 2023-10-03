export class Body{
  constructor(){
    this.element = document.querySelector('body');
  }
  add = node => {
    this.element.appendChild(node.element)
  };
}
class BasicElement{
  constructor(tag, text=''){
    this.element = document.createElement(tag);
    this.text = text;
    this.init();
  }
  set_text = text => this.element.innerText = text;
  add_class = class_name => this.element.classList.add(class_name);
  init = () => {
    this.set_text(this.text);
  }
}
export class H1 extends BasicElement{
  constructor(text=''){
    super('h1', text);
  }
}

export class H2 extends BasicElement{
  constructor(text=''){
    super('h2', text);
  }
}

export class Button extends BasicElement{
  constructor(text=''){
    super('button', text);
  }
  on_click = func => {
    this.element.addEventListener('click', func);
  }
}

export class Aside extends BasicElement{
  constructor(text=''){
    super('aside', text);
  }
}

export class P extends BasicElement{
  constructor(text=''){
    super('p', text);
  }
}

export class Dialog extends BasicElement{
  constructor(text=''){
    super('dialog', text)
  }
}
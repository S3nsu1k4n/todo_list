
class BasicElement{
  constructor(tag, text=''){
    this.element = document.createElement(tag);
    this.text = text;
    this.init();
  }
  set_text = text => this.element.innerText = text;
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
}

export class Aside extends BasicElement{
  constructor(text=''){
    super('aside', text);
  }
}
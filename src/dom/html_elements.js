export class Body{
  constructor(){
    this.element = document.querySelector('body');
  }
  add = node => {
    this.element.appendChild(node.element)
  };
}
export class BasicElement{
  constructor(tag, text=''){
    this.element = document.createElement(tag);
    this.text = text;
    this.init();
  }
  set_text = text => this.element.innerText = text;
  add_class = class_name => this.element.classList.add(class_name);
  add_node = node => this.element.appendChild(node.element);
  on_click = func => this.element.addEventListener('click', func);
  
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
    this.element.setAttribute("type", "submit");
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

export class Div extends BasicElement{
  constructor(text=''){
    super('div', text);
  }
}

export class Dialog extends BasicElement{
  constructor(text=''){
    super('dialog', text);
    this.hidden = true;
  }
  toggleModal = () => {
    if(this.hidden){
      this.show_modal();
    }
    else{
      this.close();
    }
  }
  show_modal = () => {
    if(this.hidden){
      this.element.showModal();
      this.hidden = false;
    }
  }
  close = () => {
    if(!this.hidden){
      this.element.close();
      this.hidden = true;
    }
  }
}

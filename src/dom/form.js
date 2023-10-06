import { BasicElement, Button } from "./html_elements";

export class Form extends BasicElement {
  constructor(){
    super('form');
  }
  add_label = name => this.add_node(new Label(name));
  add_input = (name, type='text', placeholder='') => this.add_node(new Input(name, type, placeholder));
  add_button = name => {
    this.button = new Button(name);
    this.add_node(this.button);
  };
}

export class Label extends BasicElement {
  constructor(name){
    super('label', name);
    this.for(name.toLowerCase());
  }
  for = name => this.element.setAttribute('for', name); 
}

export class Input extends BasicElement {
  constructor(name, type, placeholder){
    super('input');
    this.type(type);
    this.id(name.toLowerCase());
    this.name(name.toLowerCase());
    if (placeholder != ''){ this.placeholder(placeholder) }
    this.required();
    this.max_length(20);
  }
  type = identifier => this.element.setAttribute('type', identifier);
  id = name => this.element.id = name;
  name = identifier => this.element.setAttribute('name', identifier);
  placeholder = text => this.element.setAttribute('placeholder', text);
  required = () => this.element.setAttribute("required", "required");
  max_length = length => this.element.setAttribute('maxlength', length);
  value = () => this.element.value;
}
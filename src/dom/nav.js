import { H1, H2, Button } from './html_elements.js'

export class Nav{
  constructor(){
    this.element = document.querySelector('nav');
    this.project_name = new H2('Project_name');
    this.init();
  }

  add = node => this.element.appendChild(node.element);

  init = () => {
    this.add(new H1('Todo'));
    this.add(this.project_name);
    this.add(new Button('New Task'));
  }

  change_project_name = name => {
    this.project_name.set_text(name);
  }
}
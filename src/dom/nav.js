import { H1, H2, Button } from './html_elements.js'

export class Nav{
  constructor(){
    this.element = document.querySelector('nav');
    this.project_name = new H2('Project_name');
    this.button_new_task = new Button('New Task');
    this.init();
  }

  add = node => this.element.appendChild(node.element);

  init = () => {
    this.add(new H1('Todo'));
    this.add(this.project_name);
    this.add(this.button_new_task);
  }

  change_project_name = name => {
    this.project_name.set_text(name);
  }
}
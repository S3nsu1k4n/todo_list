import { P, Button } from './html_elements.js'

export class Sidebar{
  constructor(){
    this.element = document.querySelector('aside');
    this.button_new_project = new Button('New Project');
    this.init();
  }

  add = node => this.element.appendChild(node.element);

  init = () => {
    this.add(this.button_new_project);
  }

  add_project = (project, func) => {
    const button = new Button(project.title);
    button.on_click(func);
    this.add(button);
  }
}
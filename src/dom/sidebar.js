import { P, Button } from './html_elements.js'

export class Sidebar{
  constructor(){
    this.element = document.querySelector('aside');
    this.init();
  }

  add = node => this.element.appendChild(node.element);

  init = () => {
    this.add(new Button('New Project'));
  }

  add_project = project => {
    this.add(new Button(project.title));
  }
}
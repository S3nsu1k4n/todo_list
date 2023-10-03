import { Dialog, P, Button } from './html_elements.js'

export class ProjectDialog{
  constructor(){
    this.dialog = new Dialog();
    this.dialog.add_class('project_dialog');
    this.element = this.dialog.element;
  }
}
import { Dialog, P, Button } from './html_elements.js'

export class ProjectDialog extends Dialog{
  constructor(){
    super()
    this.add_class('project_dialog');
  }
}
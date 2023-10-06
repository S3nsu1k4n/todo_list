import { Dialog, P, Button, Div } from './html_elements.js'
import { Form } from './form.js';

export class ProjectDialog extends Dialog{
  constructor(){
    super()
    this.add_class('project_dialog');
    this.div = new Div();
    this.add(this.div);
    this.form = new Form();
    this.project_input;
    this.init();
  }
  add = node => this.element.appendChild(node.element);

  init = () => {
    this.div.add_node(new P('Add new Project'));
    this.form.add_label('Project');
    this.project_input = this.form.add_input('Project', undefined, 'name of project');
    //this.project_input.required();
    this.form.add_button('Create');
    this.div.add_node(this.form);
    this.div.add_class('project_dialog_div');
    this.on_click(event => this.close());
    this.div.on_click(event => event.stopPropagation());
  }
  form_button = () => {
    return this.form.button;
  }
  get input_value(){ return this.project_input.value }

}
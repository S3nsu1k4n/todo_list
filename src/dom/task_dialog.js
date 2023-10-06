import { Dialog, P, Div } from './html_elements.js'
import { Form } from './form.js';

export class TaskDialog extends Dialog {
  constructor(){
    super();
    this.add_class('task_dialog');
    this.div = new Div();
    this.add_node(this.div);
    this.form = new Form();

    this.title_input;
    this.description_input;
    this.deadline_input;
    this.priority_input;

    this.init();
  }

  init = () => {
    this.div.add_class('task_dialog_div')
    this.div.add_node(new P('New Task'));
    
    this.form.add_label('Title');
    this.title_input = this.form.add_input('title', undefined, 'Title');
    
    this.form.add_label('Description');
    this.description_input = this.form.add_text_area('Description');
    
    this.form.add_label('Deadline');
    this.deadline_input = this.form.add_input('Dealine', undefined, 'deadline');
    
    this.form.add_label('Priority');
    this.priority_input = this.form.add_input('priority', undefined, 'priority');

    this.form.add_button('Add');

    this.div.add_node(this.form);
    this.on_click(event => this.close());
    this.div.on_click(event => event.stopPropagation());
  }
  form_button = () => {
    return this.form.button;
  }
  get title(){ return this.title_input.value }
  get description(){ return this.description_input.value }
  get deadline(){ return this.deadline_input.value }
  get priority(){ return this.priority_input.value }
}
import { P } from "./html_elements";
import { Div } from "./html_elements";

export class TaskEntry extends Div{
  constructor(title, description, deadline, priority){
    super();
    this.add_class('task');
    this.add_node(new P(title));
    this.add_node(new P(deadline));
    this.add_node(new P(priority));
    this.add_node(new P(description));
  }
}
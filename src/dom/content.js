export class Content{
  constructor(){
    this.element = document.querySelector("#content");
  }
  add_node = node => this.element.appendChild(node.element);
  reset = () => this.element.innerText = "";
}
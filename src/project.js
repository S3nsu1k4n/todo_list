import { Task } from "./task";

export class Project{
  constructor(title='Default Project'){
    this.title = title;
    this.tasks = {};
  }
  add_task = task => this.tasks[task.title] = task;
}
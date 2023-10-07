import { Task } from "./task";

export class Project{
  constructor(title='Default Project'){
    this.title = title;
    this.tasks = {};
  }
  add_task = task => this.tasks[task.title] = task;
  add_many_tasks = tasks => {
    for (const [title, task] of Object.entries(tasks)){
      this.add_task(new Task(title, task.description, task.deadline, task.priority));
    }
  }
}
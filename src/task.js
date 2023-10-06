export class Task{
  constructor(title, description, deadline, priority){
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
    this.checklist = [];
    this.is_finished = false;
  }
}

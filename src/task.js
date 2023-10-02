class Task{
  constructor(title, description, due_date, priority_level){
    this.title = title;
    this.description = description;
    this.due_date = due_date;
    this.priority_level = priority_level;
    this.checklist = [];
    this.is_finished = false;
  }
}


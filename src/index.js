import "./style.css";
import "./project_dialog.css";
import "./task_dialog.css";
import { Nav, Content, Sidebar, Body, ProjectDialog } from "./dom/";
import { Project } from './project.js';
import { TaskDialog } from "./dom/task_dialog";
import { Task } from "./task";
import { TaskEntry } from "./dom/task_entry";

const body = new Body();
const project_dialog = new ProjectDialog();
const task_dialog = new TaskDialog();
body.add(project_dialog);
body.add(task_dialog);

let projects = {'Default Project': new Project('Default Project')};

let current_project = projects['Default Project'];

const nav = new Nav();
const sidebar = new Sidebar();
const content = new Content();

const update_content_area = () => {
  content.reset();
  for (const [title, task] of Object.entries(current_project.tasks)){
    content.add_node(new TaskEntry(task.title, task.description, task.deadline, task.priority));
  }
  //content.add_node(new TaskEntry(1, 1, 1, 1));
}
update_content_area();

const change_project = event => {
  nav.change_project_name(event.target.innerText);
  current_project = projects[event.target.innerText];
  update_content_area();
}



nav.change_project_name(current_project.title);
sidebar.add_project(current_project, change_project);


sidebar.button_new_project.on_click(event => {
  project_dialog.toggleModal();
});

project_dialog.form_button().on_click(event => {
  event.preventDefault();
  if (project_dialog.input_value in projects){
    alert(`Project "${project_dialog.input_value}" already exists!`);
    return
  };
  const project = new Project(project_dialog.input_value);
  projects[project_dialog.input_value] = project;
  sidebar.add_project(project, change_project);
  project_dialog.toggleModal();
});

nav.button_new_task.on_click(event => {
  task_dialog.toggleModal();
});

task_dialog.form_button().on_click(event => {
  event.preventDefault();
  if (task_dialog.title in current_project.tasks){
    alert(`Task "${task_dialog.title}" already exists!`);
    return
  };

  const task = new Task(task_dialog.title, task_dialog.description, task_dialog.deadline, task_dialog.priority);
  current_project.add_task(task);
  update_content_area();
  task_dialog.toggleModal();
});

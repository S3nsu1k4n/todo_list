import "./style.css";
import "./project_dialog.css";
import "./task_dialog.css";
import { Nav, Content, Sidebar, Body, ProjectDialog } from "./dom/";
import { Project } from './project.js';
import { TaskDialog } from "./dom/task_dialog";

const body = new Body();
const project_dialog = new ProjectDialog();
const task_dialog = new TaskDialog();
body.add(project_dialog);
body.add(task_dialog);

let current_project = new Project('Default Project');

const nav = new Nav();
const sidebar = new Sidebar();
const content = new Content();

const change_project = event => {
  nav.change_project_name(event.target.innerText);
}

nav.change_project_name(current_project.title);
sidebar.add_project(current_project, change_project);

nav.button_new_task.on_click(event => {
  task_dialog.toggleModal();
});

project_dialog.form_button().on_click(event => {
  event.preventDefault();
  sidebar.add_project(new Project(project_dialog.input_value), change_project);
  project_dialog.toggleModal();
});

task_dialog.form_button().on_click(event => {
  event.preventDefault();
  console.log(task_dialog.title);
  console.log(task_dialog.description);
  console.log(task_dialog.deadline);
  console.log(task_dialog.priority);
  task_dialog.toggleModal();
});

sidebar.button_new_project.on_click(event => {
  project_dialog.toggleModal();
});
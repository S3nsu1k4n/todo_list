import "./style.css";
import "./project_dialog.css";
import { Nav, Content, Sidebar, Body, ProjectDialog } from "./dom/";
import { Project } from './project.js';

const body = new Body();
const project_dialog = new ProjectDialog();
body.add(project_dialog);

let current_project = new Project('Default Project');
const nav = new Nav();
const sidebar = new Sidebar();
const content = new Content();

nav.change_project_name(current_project.title);
sidebar.add_project(current_project);

const new_task = (e) => {
  console.log(1111);
}


nav.button_new_task.on_click(new_task);

project_dialog.form_button().on_click(event => {
  event.preventDefault();
  sidebar.add_project(new Project(project_dialog.input_value));
  project_dialog.toggleModal();
});

sidebar.button_new_project.on_click(event => {
  project_dialog.toggleModal();
});
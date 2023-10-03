import "./style.css";
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
  console.log(111);
}

const new_project = e => {
  project_dialog.toggleModal();
}

nav.button_new_task.on_click(new_task);
sidebar.button_new_project.on_click(new_project);
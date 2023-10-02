import "./style.css";
import { Nav, Content, Sidebar } from "./dom/";
import { Project } from './project.js';

let current_project = new Project('Default Project');
const nav = new Nav();
const sidebar = new Sidebar();
const content = new Content();

nav.change_project_name(current_project.title);
sidebar.add_project(current_project);

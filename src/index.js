import "./style.css";
import { Nav, Content } from "./dom/";
import { Project } from './project.js';

let current_project = new Project('Default Project');
const nav = new Nav();
const content = new Content();

nav.change_project_name(current_project.title);


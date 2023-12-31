import './css'
import { Nav, Content, Sidebar, Body, ProjectDialog } from "./dom/";
import { Project } from './project.js';
import { TaskDialog } from "./dom/task_dialog";
import { Task } from "./task";
import { TaskEntry } from "./dom/task_entry";
import { LocalStorage } from "./localstorage";

const storage = new LocalStorage();
const body = new Body();
const project_dialog = new ProjectDialog();
const task_dialog = new TaskDialog();
body.add(project_dialog);
body.add(task_dialog);

const json_to_projects = data => {
  for (const [k, v] of Object.entries(data)){
    data[k] = new Project(k);
    data[k].add_many_tasks(v.tasks);

  }
  return data;
}

let projects = {};
if (storage.available && storage.length > 0){
  projects = json_to_projects(storage.get_projects());
}
else {
  projects = {'Default Project': new Project('Default Project')};
}

let current_project = projects['Default Project'];

const nav = new Nav();
const sidebar = new Sidebar();
const content = new Content();

const update_content_area = () => {
  content.reset();
  for (const [title, task] of Object.entries(current_project.tasks)){
    content.add_node(new TaskEntry(task.title, task.description, task.deadline, task.priority));
  }
}
update_content_area();


const change_project = event => {
  nav.change_project_name(event.target.innerText);
  current_project = projects[event.target.innerText];
  update_content_area();
}

const init_sidebar_projects = () => {
  for (const project of Object.keys(projects)){
    sidebar.add_project(project, change_project);
  }
}
init_sidebar_projects();


nav.change_project_name(current_project.title);



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
  sidebar.add_project(project.title, change_project);
  project_dialog.toggleModal();
  storage.save_projects(projects);
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
  projects[current_project.title] = current_project;
  storage.save_projects(projects);
});

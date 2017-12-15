class ProjectsController {

  constructor() {
    this.projects = []
  }

  addProject(project) {
    this.projects.push(project)
  }

}

//this can be written like this:

class ProjectsController {
  projects = [];

  addProject = (project) => {
    this.projects.push(project)
  }

}

import React, { Component } from "react";
import CreateProjectButtonComponent from "./projects/CreateProjectButtonComponent";
import ProjectItemComponent from "./projects/ProjectItemComponent";
import { getProjects } from "../actions/ProjectAction";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects } = this.props.projects;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButtonComponent />
              <br />
              <hr />
              {projects.map((project) => (
                <ProjectItemComponent key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects,
});
export default connect(mapStateToProps, { getProjects })(Dashboard);

import React, { Component } from "react";
import { Link } from "react-router-dom";

const CreateProjectButtonComponent = () => {
  return (
    <Link to="/add_project" className="btn btn-lg btn-info">
      Create a Project
    </Link>
  );
};

export default CreateProjectButtonComponent;

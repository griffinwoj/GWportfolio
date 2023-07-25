import React from "react";
import Project from "./Project"; // Assuming the Project component is in the same directory
import WorkDayPlanner from "../images/14-mvc-homework-demo-01.gif";
import WebAPI from "../images/06-server-side-apis-homework-demo.png";
import Weather from "../images/21-mern-homework-demo-02.gif";
import Blog from "../images/18-nosql-homework-demo-01.gif";
import StackDev from "../images/11-express-homework-demo-01.png";
import EmployeeTracker from "../images/21-mern-homework-demo-02 (1).gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
    // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Blog",
              description: "Blog",
              imgSrc: Blog,
              deployedLink: "",
              githubLink: ""
            },
            {
              title: "LookBook",
              description: "Google Book Search",
              imgSrc: StackDev,
              deployedLink: "https://griffinwoj.github.io/Portfolio/",
              githubLink: "https://github.com/griffinwoj/Portfolio"
            },
            {
              title: "Planner",
              description: "Work Day Planner",
              imgSrc: WorkDayPlanner,
              deployedLink: "",
              githubLink: "https://github.com/griffinwoj/Calendar-App"
            },
            {
              title: "Hello-E-Comm",
              description: "WebAPI",
              imgSrc: WebAPI,
              deployedLink: "https://github.com/griffinwoj/Hello-E-Comm",
              githubLink: "https://github.com/griffinwoj/Hello-E-Comm"
            },
            {
              title: "Galactic-Tracker",
              description: ".",
              imgSrc: EmployeeTracker,
              deployedLink: "https://github.com/griffinwoj/Galactic-Tracker",
              githubLink: "https://github.com/griffinwoj/Galactic-Tracker"
            },
            {
              title: "Whats-Up-Weather-App",
              description: "Weather Dashboard.",
              imgSrc: Weather,
              deployedLink: "",
              githubLink: "https://github.com/griffinwoj/Whats-Up-Weather-App"
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export Portfolio
export default Portfolio;

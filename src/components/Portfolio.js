import React from "images/2.gif";
import Project from "images/3.gif";
import WorkDayPlanner from "images/4.gif";
import WebAPI from "images/5.gif";
import Weather from "images/6.gif";
import Blog from "images/7.gif";
import StackDev from "images/8.gif";
import ThingsToDoInToronto from "images/9.gif";
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
              description: " Blog",
              imgSrc: Blog,
              deployedLink:
                "",
              githubLink:
                "",
            },
            {
              title: "S Portfolio",
              description: "CSS",
              imgSrc: StackDev,
              deployedLink:
                "",
              githubLink:
                "",
            },
            {
              title: "Online Workday Planner",
              description: "Third-Party API Sceduler ft. Day.js",
              imgSrc: WorkDayPlanner,
              deployedLink:
                "",
              githubLink:
                "",
            },
            {
              title: "Java Script: WEB API Quiz",
              description: "Dynamically updated HTML & CSS Web API quiz game.",
              imgSrc: WebAPI,
              deployedLink:
                "",
              githubLink:
                "",
            },
            {
              title: "10 Things to Do in Toronto",
              description: "Interactive Front-End Application Guide.",
              imgSrc: ThingsToDoInToronto,
              deployedLink:
                "",
              githubLink:
                "",
            },
            {
              title: "Weather Dashboard",
              description: "Weather Dashboard.",
              imgSrc: Weather,
              deployedLink:
                "",
              githubLink:
                "",
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

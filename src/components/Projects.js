import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import logissy from '../assets/img/logissy-image.png'
import freeze from '../assets/img/freeze-img.png'

import colorSharp2 from "../assets/img/color-sharp2.png";
import saintsmen from '../assets/img/saintsmen.png'
import ml from '../assets/img/ml.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Power BI Project",
      description: "Power BI project on retail analysis",
      imgUrl: logissy,
      link:"https://github.com/rishi231298/power-bi-retail-report/blob/main/Retail_data_analysis%20(1).pbix"
    },
    {
      title: "Machine Learning Project",
      description: "Cardiovascular disease ML prediction",
      imgUrl:ml,
      link:"https://github.com/rishi231298/Machine_Learning_Projects"
    },
    {
      title: "Power BI Dashboard",
      description: "",
      imgUrl: saintsmen,
      link:"https://github.com/rishi231298/POWERBI_DASHBOARD/blob/main/project-3-data-visualization-power-bi-dashboard.ipynb"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Over the past year with my current organization, I’ve had the opportunity to contribute to three distinct projects as a Frontend Developer.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
            
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  
                    <Tab.Pane eventKey="third">
  
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

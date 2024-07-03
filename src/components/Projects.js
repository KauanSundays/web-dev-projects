import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sectotech.png";
import projImg2 from "../assets/img/crescer.png";
import projImg3 from "../assets/img/logo-cb.png";
import projImg4 from "../assets/img/impacta.png";
import projImg5 from "../assets/img/abralimp.jpeg";
import projImg6 from "../assets/img/brasas.png";
import projImg7 from "../assets/img/nutriport.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SECTOTECH LTDA",
      description: "Desenvolvendo Sistemas",
      imgUrl: projImg1,
    },
    {
      title: "CRESCER TECNOLOGIA",
      description: "Desenvolvendo Sistemas.",
      imgUrl: projImg2,
    },
    {
      title: "CENTRO BRITÂNICO",
      description: "Manutenção ao Sistema PHP (CRESCER TECNOLOGIA).",
      imgUrl: projImg3,
    },
    {
      title: "FACULDADE IMPACTA",
      description: "Manutenção ao Sistema PHP (CRESCER TECNOLOGIA).",
      imgUrl: projImg4,
    },
    {
      title: "ABRALIMP",
      description: "Manutenção ao Sistema PHP (CRESCER TECNOLOGIA).",
      imgUrl: projImg5,
    },
    {
      title: "BRASAS",
      description: "Manutenção ao Sistema PHP (CRESCER TECNOLOGIA).",
      imgUrl: projImg6,
    },
    {
      title: "NUTRIPORT",
      description: "Suporte de TI. Automação de processos com Python",
      imgUrl: projImg7,
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
                <h2>Projetos e empresas</h2>
                <p>Desenvolvi e prestei suporte para os seguintes projetos e empresas.</p>
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

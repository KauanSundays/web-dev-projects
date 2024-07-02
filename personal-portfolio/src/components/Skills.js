import meter1 from "../assets/img/laravel.png";
import meter2 from "../assets/img/react.png";
import meter3 from "../assets/img/.net.png";
import meter4 from "../assets/img/django.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import phpImage from "../assets/img/php.png";
import pythonImage from "../assets/img/python.png";
import cImage from "../assets/img/Csharp_Logo.png";
import jsImage from "../assets/img/js.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillsFirstRow = [
    { img: phpImage, title: "PHP" },
    { img: jsImage, title: "JAVASCRIPT" },
    { img: cImage, title: "C#" },
    { img: pythonImage, title: "PYTHON" }
  ];

  const skillsSecondRow = [
    { img: meter1, title: "Laravel" },
    { img: meter2, title: "React" },
    { img: meter3, title: "Node.js" },
    { img: meter4, title: "Database Management" }
  ];

  const skillsFirstRow2 = [
    { img: phpImage, title: "PHP" },
    { img: jsImage, title: "JAVASCRIPT" },
    { img: cImage, title: "C#" },
    { img: pythonImage, title: "PYTHON" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>Tecnologias, linguagens e frameworks.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillsFirstRow.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={`Imagem ${skill.title}`} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillsSecondRow.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={`Imagem ${skill.title}`} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Imagem de fundo" />
    </section>
  )
}

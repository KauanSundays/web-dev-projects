import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/eu.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'Ricardo.kauand@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        console.log(`E-mail ${email} copiado para a área de transferência.`);
      })
      .catch(err => {
        console.error('Erro ao copiar o e-mail: ', err);
      });
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <h1>{`Kauan,`} <span className="txt-static">Desenvolvedor FullStack</span></h1>
              <p>Desenvolvimento de sistemas e serviços de tecnologia.</p>
              <button onClick={handleCopyEmail}>Copiar E-mail Ricardo.kauand@gmail.com<ArrowRightCircle size={25} /></button>
              {copied && <p style={{ color: 'green', marginTop: '5px' }}>E-mail copiado para a área de transferência!</p>}
            </div>
          </Col>
          <Col>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

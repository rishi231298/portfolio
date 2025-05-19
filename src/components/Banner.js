import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import home from "../assets/img/home-image.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("Ja");
  const [typingSpeed, setTypingSpeed] = useState(200);
  const roles = ["Data Engineer", "Data Analyst"];
  const typingPause = 200;

  useEffect(() => {
    const handleTyping = setTimeout(() => {
      updateText();
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [text, isDeleting]);

  const updateText = () => {
    const currentRole = roles[loopNum % roles.length];
    if (isDeleting) {
      setText((prev) => prev.slice(0, -1));
      if (text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(100);
      }
    } else {
      setText((prev) => currentRole.slice(0, prev.length + 1));
      if (text === currentRole) {
        setIsDeleting(true);
        setTypingSpeed(typingPause);
      }
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <span className="tagline">Hey, I'm Rishi</span>
                  <h1>
                    <span style={{ color: "white" }}>I am a </span> <br />
                    <span style={{ color: "purple" }}>{text}</span>
                  </h1>
                  <p style={{ marginBottom: 28 }}>
                    I'm a Data Professional with 3 years of experience in data
                    analytics and data engineering. I specialize in ETL development
                    and data visualization solutions using industry-standard tools.
                    My technical expertise includes SSIS, Informatica PowerCenter,
                    MySQL databases, and visualization platforms like Power BI and
                    Tableau. My experience spans multiple projects, including
                    leading the data transformation workflow for one significant
                    initiative.
                  </p>
                  <a
                    style={{
                      color: "white",
                      fontSize: 24,
                      textDecoration: "none",
                      marginTop: 100,
                      display: "inline-block",
                    }}
                    href="https://drive.google.com/file/d/1f9ix-LFoFqpo_oYV0Dq_dGHnVDGODh79/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View My Resume <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    marginTop:"40px"
                  }}
                >
                  <img
                    src={home}
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

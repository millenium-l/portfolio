import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const handlenavigationtoContactMePage = () => {
    navigate("/contact");
  };
  return (
    <>
      <section id="home" className="home">
        <div className="home__text-wrapper">
          <h1>
            Hello, I'm Lee
            <br />
            Front End Developer
          </h1>
        </div>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            translate: "translateY(0px)",
          }}
        >
          <div className="home__contact-me">
            <button onClick={handlenavigationtoContactMePage}>Hire me</button>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default Home;

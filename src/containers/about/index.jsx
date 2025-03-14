import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeadercontent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name:",
    value: "lee kim",
  },
  {
    label: "Age:",
    value: "19",
  },
  {
    label: "Address:",
    value: "Kenya",
  },
  {
    label: "Email:",
    value: "likim12@gmail.com",
  },
  {
    label: "Contact:",
    value: "0123456789",
  },
];

const jobsummary =
  "We are seeking a dynamic Marketing Manager to lead our marketing team and develop innovative strategies to increase brand awareness, engage customers, and drive revenue growth. This role requires a creative thinker with strong leadership skills to manage campaigns, analyze market trends, and collaborate with cross-functional teams. The Marketing Manager will be responsible for ensuring the effectiveness of our marketing efforts and aligning them with company goals.";
const About = () => {
  return (
    <>
      <section id="about" className="about">
        <PageHeaderContent
          headerText="About me"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="about__content">
          <div className="about__content__personalWrapper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateX(-900px)",
              }}
              end={{
                translate: "translateX(0px)",
              }}
            >
              <h3 className="personalInformationHeaderText">
                Front End Developer
              </h3>
              <p>{jobsummary}</p>
            </Animate>

            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateX(500px)",
              }}
              end={{
                translate: "translateX(0px)",
              }}
            >
              <h3>Personal Information</h3>
              <ul>
                {personalDetails.map((item, index) => (
                  <li key={item.id}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
          <div className="about__content__servicesWrapper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateX(500px)",
              }}
              end={{
                translate: "translateX(0px)",
              }}
            >
              <div className="about__content__servicesWrapper__innerContent">
                <div>
                  <FaDev size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaDatabase
                    size={60}
                    color="var(--yellow-theme-main-color)"
                  />
                </div>
                <div>
                  <DiApple size={60} color="var(--yellow-theme-main-color)" />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

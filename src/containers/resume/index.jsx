import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeadercontent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="my resume"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline
              layout="1-column"
              linecolor="var(--yellow-theme-main-color)"
            >
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>

                    <h4 className="vertical-timeline-element-sub-title">
                      {item.subtitle}
                    </h4>

                    <p>{item.description}</p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

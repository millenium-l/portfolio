import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeadercontent";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="my portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>
    </>
  );
};

export default Portfolio;

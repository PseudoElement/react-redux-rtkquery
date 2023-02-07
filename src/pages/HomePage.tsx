import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import "./styles/HomePageStyle.css";

const HomePage = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  
  React.useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="main">
            <h1>{isMobile ? "MOBILE" : "WE ARE BROADWAY"}</h1>
            <a className="btn-main" href="#">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="supporting">
        <div className="container">
          <div className="col">
            <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg" />
            <h2>Design</h2>
            <p>Make your projects look great and interact beautifully.</p>
            <a className="btn-default" href="#">
              Learn More
            </a>
          </div>
          <div className="col">
            <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg" />
            <h2>Develop</h2>
            <p>Use modern tools to turn your design into a web site</p>
            <a className="btn-default" href="#">
              Learn More
            </a>
          </div>
          <div className="col">
            <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg" />
            <h2>Deploy</h2>
            <p>Use modern tools to turn your design into a web site</p>
            <a className="btn-default" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="footer">
        <div className="container">
          <p>&copy; Broadway 2015</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

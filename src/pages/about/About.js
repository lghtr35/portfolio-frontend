import { Image } from "react-bootstrap";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div className="main-container">
        <div className="first-row">
          <div className="me-img-container">
            <Image
              src="https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png"
              alt="my_img"
              fluid
            />
          </div>
          <div style={{ flex: 2, alignSelf: "stretch" }}>
            {<h2 className="img-name-text">Serdıl Çağın Çakmak</h2>}

            <div className="img-info-text">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <span>
                    Istanbul Technical University Computer Engineering BSc.
                  </span>
                </li>
                <li>
                  <span>Full-Stack Development</span>
                </li>
                <li>
                  <span>Data Analysis</span>
                </li>
                <li>Cloud Infrastructure</li>
              </ul>
            </div>
            <div className="about-container">
              <span>
                Hi, I am Serdıl Çağın a Software Engineer living in Istanbul. I
                am interested in IoT, computer communications, networking, data
                analysis and AI.
              </span>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="cv-container">
            <iframe src="/CV.pdf" title="myCv" className="cv">
              <span>No pdf plug-in</span>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

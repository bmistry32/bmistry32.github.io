import React from "react";
import {
  RiComputerLine,
} from "react-icons/ri";
import {
  TiLocation,
} from "react-icons/ti"
import {
  FaGraduationCap,
} from "react-icons/fa"
import '../../assets/bttn-min.css'

function ExperienceContent(props) {
  const [showDiv, setShowDiv] = React.useState(false)
  const showDetails = () => setShowDiv(true)
  const Details = () => (
    <div id="workDetails" syle={{ display: 'none' }}>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
  return (
    <div className="cv-item">
      <div className="cv-information">
        <RiComputerLine /> <h5 className="cv-highlighted-information">
          {props.title}
        </h5>
        <br />
        <TiLocation /> <h6 className="cv-highlighted-information">
          {props.subtitle}
        </h6>
        <em className="cv-date">{props.date}</em>
      </div>
      <button class="btn-show bttn-jelly" onClick={showDetails}>Show Details</button><br />
      { showDiv ? <Details /> : null}
    </div>
  );
}

function ExperienceFullyConfiguredContent(props) {
  const [showDiv, setShowDiv] = React.useState(false)
  const showDetails = () => setShowDiv(true)
  const Details = () => (
    <div id="workDetails" syle={{ display: 'none' }}>
      {props.content.map((value, index) => (
        <li style={{ "list-style-type": "none", textAlign: "left" }} key={index}>{value}</li>
      ))}
    </div>
  )
  return (
    <div className="cv-item">
      <div className="cv-information">
        <RiComputerLine /> <h5 className="cv-highlighted-information">
          {props.title}
        </h5>
        <br />
        <TiLocation /> <h6 className="cv-highlighted-information">
          {props.subtitle}
        </h6>
        <em className="cv-date">{props.date}</em>
      </div>
      <button class="btn-show bttn-jelly" onClick={showDetails}>Show Details</button><br />
      { showDiv ? <Details /> : null}
    </div>
  );
}

function EducationContent(props) {
  return (
    <div className="cv-item">
      <div className="cv-information">
        <FaGraduationCap /> <h5 className="cv-highlighted-information">
          {props.title}
        </h5>
        <br />
        <TiLocation /> <h6 className="cv-highlighted-information">
          {props.subtitle}
        </h6>
        <em className="cv-date">{props.date}</em>
      </div>

      <ul>
        {props.content.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export { ExperienceContent, ExperienceFullyConfiguredContent, EducationContent };

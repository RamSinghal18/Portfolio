import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "react-icons/School";

function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SRBS International School,Mathura,Uttar Pradesh
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shri Ji Baba Saraswati Vidya Mandir,Mathura,Uttar Pradesh
          </h3>

          <p>Intermediate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
        //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Harcourt Butler Technical University,Kanpur
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science
          </h4>
          <p>Bachelor</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
// WorkExperience.jsx
import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    company: "ABC Company",
    title: "Senior Software Engineer",
    date: "Jan 2020 - Present",
    desc: [
      "Lead a team of developers to deliver high-quality software solutions.",
      "Collaborated with stakeholders to gather requirements and define project scope.",
      "Implemented new features and enhancements to improve product functionality.",
      "Resolved technical issues and bugs to ensure smooth operation of applications.",
      "Mentored junior team members to foster their professional growth."
    ]
  },
  {
    company: "XYZ Corporation",
    title: "Software Developer",
    date: "Jun 2017 - Dec 2019",
    desc: [
      "Designed and developed web applications using modern technologies such as React and Node.js.",
      "Participated in code reviews and provided constructive feedback to team members.",
      "Contributed to the planning and estimation of project timelines.",
      "Worked closely with QA team to ensure software quality through testing and validation."
    ]
  },
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <div className="we-work-experience">
      <h1>Work Experience</h1>
      <div className="we-timeline">
        {experiences.map((experience, index) => (
          <div className="we-experience" key={index}>
            <div className="we-content">
              <h3>{experience.title}</h3>
              <p className="we-company">{experience.company}</p> {/* Added company name */}
              <p className="we-date">{experience.date}</p>
              <ul>
                {experience.desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;

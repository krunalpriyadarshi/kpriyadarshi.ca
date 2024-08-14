import React, { useState } from 'react';
import './WorkExperience.css';

const experiences = [
  {
    company: "Conga Pvt. Ltd.",
    title: "Software Developer",
    date: "July 2021 - November 2022",
    desc: [
      "Led development and managed projects which brought over $20M+ in value to the company despite complex requirements.",
      "Developed clean and efficient code and went through multiple code review cycles to ensure adherence to coding standards, maintaining high-quality software by 40%.",
      "Implemented rigorous testing methodologies, resulting in a 25% reduction in bugs/issues post-deployment.",
      "Orchestrated over 50 updates to testing playgrounds and 5 updates to production environments, streamlining processes by approximately 30% while ensuring consistent performance, upholding code quality standards, and maintaining error-free functionality throughout all deployments, resulting in a 20% increase in efficiency.",
      "Collaborated closely with stakeholders resulting in an 80% reduction in Client-BA-Dev cycle."
    ]
  },
  {
    company: "Way to Web",
    title: "Android Developer Intern",
    date: "May 2023 - August 2023",
    desc: [
      "Demonstrated strong problem-solving skills and attention to detail in resolving 25 technical challenges and implementing solutions effectively while gathering requirements for sprints, prioritizing tasks, and ensuring timely delivery of project milestones."
    ]
  }
];

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    // Toggle the state for the specific index
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="we-work-experience">
      <h1>Work Experience</h1>
      <div className="we-timeline">
        {experiences.map((experience, index) => (
          <div className="we-experience" key={index}>
            <div className="we-content">
              <h3>{experience.title}</h3>
              <p className="we-company">{experience.company}</p>
              <p className="we-date">{experience.date}</p>
              {expandedIndex === index && (
                <ul>
                  {experience.desc.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {experience.desc.length > 0 && (
                <p
                  className="we-show-more"
                  onClick={() => handleToggle(index)}
                >
                  {expandedIndex === index ? 'Show Less' : 'Show More'}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
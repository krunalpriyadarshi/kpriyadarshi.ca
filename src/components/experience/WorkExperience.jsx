import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    company: "Conga Pvt. Ltd.",
    title: "Associated Software Developer",
    date: "July 2021 - November 2022",
    desc: [
      "Led development and Managed projects which brought over $20M+ in value to the company despite complex requirements.",
      "Optimized loading speed and efficiency by 40% through leveraging VBA in Microsoft Excel to automate data extraction from Salesforce databases. Implemented the XAE tool to automate data uploads back into Salesforce, reducing manual calculation and data entry efforts by 50%, while ensuring accuracy and consistency.",
      "Developed clean and efficient code for needs and went through multiple code review cycles to ensure adherence to coding standards and maintain high-quality software by 40%. Implemented rigorous testing methodologies, resulting in a 25% reduction in bugs and issues post-deployment.",
      "Orchestrated over 50 updates to testing playgrounds and 5 updates to production environments, streamlining processes by approximately 30% while ensuring a consistent performance, upheld code quality standards, and maintained error-free functionality throughout all deployments, resulting in a 20% increase in efficiency.",
      "Collaborated closely with stakeholders on Cardinal Health CLM, actively contributing to 7 contracts, resulting in a 80% repetitive Client-BA-Dev cycle. Engaged in over 20 company-to-company calls to collect and synthesize requirements with business analysts, ensuring alignment with project objectives and user needs."
    ]
  },
  {
    company: "Way to Web",
    title: "Android Developer Intern",
    date: "May 2023 - August 2023",
    desc: [
      "Participated in 2 Spirits of the full stack software development lifecycle, including design, development, testing and deployment of 5+ new features to Application with multiple rounds of code reviews from senior developers.",
      "Demonstrated strong problem-solving skills and attention to detail in resolving 25 technical challenges and implementing solutions effectively while gathering requirements for sprints, prioritizing tasks, and ensure timely delivery of project milestones."
    ]
  },
  // use codepen bookmark -> only show 1st experiecnce in full height plus use read more style.
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
              <p className="we-company">{experience.company}</p>
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

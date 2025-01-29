import React, { useState } from 'react';
import './WorkExperience.css';

const experiences = [
  {
    company: "Conga Pvt. Ltd.",
    title: "Software Developer",
    date: "July 2021 - November 2022",
    desc: [
      "Designed and developed multiple enterprise-level applications for National Express, driving $3.2 million of revenue using the latest technologies of JAVA, Spring Boot, React, VBA, Salesforce and AWS.",
      "Integrated React-based features to the API Gateway to enable dynamic action buttons for status updates.",
      "Engineered automated business logic for a configurable price matrix, which reduced manual errors by 30% and improved billing accuracy for over 1,000 transactions daily.",
      "Built an automated workflow that triggers based on user responses/actions to system-generated emails, improving process efficiency by 25%.",
      "CI/CD Pipeline Integration, Pull request, code reviews, load/stress testing, unit/integration/e2e testing."
    ]
  },
  {
    company: "Way to Web",
    title: "Android Developer Intern",
    date: "May 2023 - August 2023",
    desc: [
      "Led the redevelopment of internal Issue Management System by integrating multiple new features, leading to efficient issue tracking and Handling using JAVA technologies.",
      "Optimized the MVC architecture to streamline request and response handling, reducing processing time by 20%.",
      "Gained expertise in crafting scalable and extensible code following to SOLID principles.",
      "Debugged and optimizing existing code, resulting in a 10% reduction in app crashes and enhanced stability"
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
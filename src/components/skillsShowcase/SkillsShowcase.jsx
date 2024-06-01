import React from 'react';
import './SkillsShowcase.css';

const skills_set1 = [
    { "name": "JMeter", "icon": "src/assets/tools/jmeter-icon.png" },
    { "name": "Spring Boot", "icon": "src/assets/tools/spring-boot-icon.png" },
    { "name": "NoSQL (MongoDB)", "icon": "src/assets/tools/mongodb-icon.png" },
    { "name": "Java", "icon": "src/assets/tools/java-icon.png" },
    { "name": "HTML/CSS", "icon": "src/assets/tools/html-css-icon.png" },
    { "name": "Object Oriented Programming/OOPS", "icon": "src/assets/tools/oops-icon.png" },
    { "name": "JUnit", "icon": "src/assets/tools/junit-icon.png" },
    { "name": "AWS Services", "icon": "src/assets/tools/aws-icon.png" },
    { "name": "ReactJS", "icon": "src/assets/tools/react-icon.png" },
    { "name": "SDLC", "icon": "src/assets/tools/sdlc-icon.png" },
    { "name": "Data structures", "icon": "src/assets/tools/data-structures-icon.png" },
    { "name": "Swagger", "icon": "src/assets/tools/swagger-icon.png" },
    { "name": "Python", "icon": "src/assets/tools/python-icon.png" },
    { "name": "Spring MVC", "icon": "src/assets/tools/spring-mvc-icon.png" },
    { "name": "JavaScript", "icon": "src/assets/tools/javascript-icon.png" },
    { "name": "Code Review", "icon": "src/assets/tools/code-review-icon.png" },
    { "name": "Docker", "icon": "src/assets/tools/docker-icon.png" }
];

const skills_set2 = [
    { "name": "Apex Code", "icon": "src/assets/tools/apex-code-icon.png" },
    { "name": "Jenkins", "icon": "src/assets/tools/jenkins-icon.png" },
    { "name": "Scrum", "icon": "src/assets/tools/scrum-icon.png" },
    { "name": "Git", "icon": "src/assets/tools/git-icon.png" },
    { "name": "Visual Studio Code", "icon": "src/assets/tools/vscode-icon.png" },
    { "name": "Postman", "icon": "src/assets/tools/postman-icon.png" },
    { "name": "Dynatrace", "icon": "src/assets/tools/dynatrace-icon.png" },
    { "name": "Kanban", "icon": "src/assets/tools/kanban-icon.png" },
    { "name": "RESTful API", "icon": "src/assets/tools/restful-api-icon.png" },
    { "name": "IntelliJ", "icon": "src/assets/tools/intellij-icon.png" },
    { "name": "NodeJS", "icon": "src/assets/tools/nodejs-icon.png" },
    { "name": "Algorithms/DSA", "icon": "src/assets/tools/algorithms-icon.png" },
    { "name": "SOQL", "icon": "src/assets/tools/soql-icon.png" },
    { "name": "ChatGPT", "icon": "src/assets/tools/chatgpt-icon.png" },
    { "name": "MySQL", "icon": "src/assets/tools/mysql-icon.png" },
    { "name": "Webpack", "icon": "src/assets/tools/webpack-icon.png" },
    { "name": "Agile Methodology", "icon": "src/assets/tools/agile-icon.png" },
    { "name": "Jira", "icon": "src/assets/tools/jira-icon.png" }
  ];  

const SkillsShowcase = () => {
  return (
    <div className="skills-showcase">
      <h3>Amazing Frameworks and Tools that I've Worked With</h3>
      <div className="skills-list">
        {skills_set1.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            
          </div>
        ))}
      </div>
      <div className="skills-list unique-effect">
        {skills_set2.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsShowcase;

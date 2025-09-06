// src/components/Skills/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "C++", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C#", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "JavaScript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "NodeJS", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
    { name: "PHP", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Ruby", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
    { name: "Swift", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "TypeScript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Dart", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Golang", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "SQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "MySQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Oracle", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "PostgreSQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "H2", link: "https://h2database.com/html/images/h2-logo-2.png" },
    { name: "MongoDB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "AWS DynamoDB", link: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
    { name: "Linux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Unix", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unix/unix-original.svg" },
    { name: "VIM", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },
    { name: "GIT", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "IntelliJ", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "Maven", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
    { name: "JIRA", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "LAMP Stack", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Jenkins", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Load Balancing", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "CDNs", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
    { name: "Microservices", link: "https://cdn-icons-png.flaticon.com/128/10061/10061299.png" },
    { name: "Spring Boot", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Apache Kafka", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Apache_kafka-icon.svg/2048px-Apache_kafka-icon.svg.png" },
    { name: "RabbitMQ", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
    { name: "AWS Services", link: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
    { name: "Azure", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "GCP", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "UI Builder", link: "https://cdn.icon-icons.com/icons2/2699/PNG/512/servicenow_logo_icon_168835.png" },
    { name: "Tableau", link: "https://img.icons8.com/?size=48&id=9Kvi1p1F0tUo&format=png" },
    { name: "GitHub", link: "https://cdn-icons-png.flaticon.com/128/25/25657.png" },
    { name: "Bootstrap", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    { name: "Redux", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
    { name: "Sass", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.link} alt={skill.name} className="skill-icon" />
              <h5 className="skill-name">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from "react";

const projects = [
  {
    title: "Easy Entertainment",
    description:
      "Web application to get trending movies and post movie reviews.",
    bullets: [
      "Designed and coded a movie watchlist application using Spring Boot, React.js, and Amazon Web Services.",
      "Implemented authentication and authorization with Cognito.",
      "Created a REST API managed by the AWS API Gateway.",
      "API integration using Lambdas, DynamoDB, and IAM.",
    ],
    link: "https://github.com/jacob670/java-aws-chat-application-v2",
  },
  {
    title: "Safe Vault",
    description:
      "API with minimal UI to encrypt and store custom passwords.",
    bullets: [
      "Designed and implemented a .NET API that performs AES 256 encryption.",
      "Managed by the AWS API Gateway.",
      "API integration using Lambdas, DynamoDB, and IAM.",
      "Stores and retrieves the passwords from DynamoDB.",
    ],
    link: "https://github.com/jacob670/SafeVault",
  },
];

const logos = [
  { src: "/assets/java-logo.png", alt: "Java" },
  { src: "/assets/csharp-logo.png", alt: "C#" },
  { src: "/assets/js-logo.webp", alt: "JavaScript" },
  { src: "/assets/sql-logo.png", alt: "SQL" },
  { src: "/assets/python-logo.png", alt: "Python" },
  { src: "/assets/c-logo.png", alt: "C" },
  { src: "/assets/assembly-logo.png", alt: "Assembly" },
  { src: "/assets/r-logo-v2.png", alt: "R" },
];

const tools = [
  "Amazon Web Services",
  "Git & Github",
  "Postman",
  "Azure DevOps",
  "Powershell",
  "SQL Server Management Studio",
  "SQL Server Reporting Services",
  "Wireshark",
  "Swagger",
  "Splunk",
  "Rancher",
  "Ansible"
];

const Software = () => {
  return (
    <section className="software-section" id="software" aria-label="Software projects">
      <div className="software-header">
        <span className="software-filename">software.md</span>
      </div>

      <div className="markdown-document">
        <div className="markdown-block">
          <div className="markdown-header">## projects</div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-item" key={project.title}>
                <div className="project-meta">
                  <span className="project-index">0{index + 1}.</span>
                  <h3>{project.title}</h3>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    [github]
                  </a>
                </div>

                <p>{project.description}</p>

                <ul>
                  {project.bullets.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="markdown-block">
          <div className="markdown-header">## languages</div>
          <div className="logo-row">
            {logos.map(({ src, alt }) => (
              <div className="logo-badge" key={alt} title={alt}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="markdown-block">
          <div className="markdown-header">## tools</div>
          <div className="tool-row">
            {tools.map((tool) => (
              <span className="tool-pill" key={tool}>- {tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
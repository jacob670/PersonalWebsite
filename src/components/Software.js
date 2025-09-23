import React from "react";

const projects = [
  {
    title: "Easy Entertainment",
    description: "A full stack application with Spring Boot and ReactJS where users can create accounts, fetch trending movies, build watchlists, and post movie reviews",
    bullets: ["Implemented secure authentication and authorization with AWS Cognito",
      "Created a functional REST API managed by the AWS API Gateway",
      "API integration using Lambdas, DynamoDB, and IAM"],
    link: "https://github.com/jacob670/java-aws-chat-application-v2"
  },
  {
    title: "Safe Vault",
    description: "A C# API with a lightweight ReactJS UI that securely stores and encrypts/decrypts custom passwords",
    bullets: ["Implemented AES-256 encryption in order to create secure storage",
      "Applied IAM permissions in AWS, practicing concepts such as PoLP",
      "Stores and retrieves the passwords from AWS DynamoDB"],
    link: "https://github.com/jacob670/SafeVault"
  },
];

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  padding: "20px",
  width: "500px",
  height: "auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
};

const cardHoverStyle = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
};

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

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  overflowX: "auto",
  padding: "1rem",
  marginBottom: "2rem",
};

const logoWrapperStyle = {
  flexShrink: 0,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80px",
  height: "80px",
};

const tools = [
  "Amazon Web Services",
  "Git & Github",
  "Postman",
  "Azure DevOps",
  "Powershell",
  "SQL Server Management Studio",
  "SQL Server Reporting Services",
  "Wireshark",
  "Swagger"
];

const containerStyleTools = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
  padding: "0 1rem",
  marginBottom: "2rem",

};

const badgeStyle = {
  padding: "6px 16px",
  background: "linear-gradient(135deg, #d0f0ff, #a0dfff)",
  color: "#1f2937",
  borderRadius: "9999px",
  fontWeight: 500,
  cursor: "default",
  userSelect: "none",
  fontSize: "15px",
  transition: "transform 0.2s ease, background 0.2s ease",
};

const imgStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  transition: "transform 0.3s ease-in-out",
};

const Software = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section
      id="Software"
      style={{
        scrollMarginTop: "90px",
        minHeight: "100vh",
        maxWidth: "1100px",
        margin: "0 auto",
        backgroundColor: "#f5f7fa",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >

      <h2
        style={{
          position: "relative",
          display: "inline-block",
          paddingBottom: "10px",
          marginBottom: "20px",
          fontSize: "25px",
        }}
      >
        Projects, Languages, & Tools
        <span
          style={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "10%",
            width: "80%",
            height: "3px",
            backgroundColor: "#00aaff",
          }}
        ></span>
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          marginTop: "5px",
          marginBottom: "50px"
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoveredIndex === index ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 style={{ marginBottom: "8px", color: "#0077cc" }}>
              {project.title}
            </h3>

            <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.3" }}>
              {project.description}
            </p>

            <ul
              style={{
                paddingLeft: "20px",
                margin: "8px 0",
                color: "#555",
                fontSize: "13px",
                lineHeight: "1.8",
              }}
            >
              {project.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

          </div>
          
        ))}
      </div>

      <div style={containerStyle}>
        {logos.map(({ src, alt }) => (
          <div key={alt} style={logoWrapperStyle}>
            <img
              src={src}
              alt={alt}
              style={imgStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <img
          src="/assets/aws-cloud-logo.png"
          alt="AWS Certified"
          style={{ maxWidth: "120px" }}
        />
      </div>

      <div style={containerStyleTools}>
        {tools.map((tool) => (
          <span key={tool} style={badgeStyle}>
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Software;
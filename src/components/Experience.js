const Experience = () => (
  <section
    id="Experience"
    style={{
      paddingTop: "140px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "left",
      maxWidth: "800px",
      margin: "0 auto",
      gap: "2rem",
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
      Professional Experience
      <span
        style={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "10%",
          width: "80%",
          height: "3px",
          backgroundColor: "#00aaff"
        }}
      ></span>
    </h2>

    <div style={{ width: "100%" }}>
      <h3 style={{ fontSize: "20px", marginTop: 0, marginBottom: "8px" }}>
        Norman Noble, Inc
      </h3>

      <p style={{ margin: 0, color: "#333", lineHeight: 1.2 }}>
        <span style={{ color: "#00aaff", fontWeight: "bold" }}>
          Software Developer Intern
        </span>
      </p>

      <p style={{ margin: 0, color: "#555", lineHeight: 1.2 }}>
        Highland Heights, OH
      </p>

      <p style={{ margin: 0, color: "#555", lineHeight: 1.2 }}>
        May 2025 - August 2025
      </p>

      <ul
        style={{
          marginTop: "0.5rem",
          marginBottom: "1rem",
          paddingLeft: "0",
          marginLeft: "0",
          listStylePosition: "outside",
          color: "#555",
          lineHeight: "1.7",
          fontWeight: 300
        }}
      >


        <li>Collaborated with stakeholders to gather BI requirements and translated them into functional C# API automation programs</li>
        <li>Refactored T-SQL stored procedures and developed optimized queries for integration within Epicor Kinetic ERP</li>
        <li>Identified and extracted critical business logic from legacy C# applications to produce optimized SSRS reports for operational efficiency</li>
        <li>Built and deployed C# REST APIs in Epicor Kinetic ERP to enable seamless integration with reporting tools and business-critical applications</li>
        <li>Constructed integrated applications within Epicor Kinetic ERP using REST APIs and optimized queries to streamline data flow and reporting</li>

      </ul>
    </div>


    <a
      href="#Software"
      style={{
        marginTop: "auto",
        marginBottom: "200px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src="/assets/down-arrow-black.png"
        alt="Scroll to Experience"
        style={{
          width: "25px",
          height: "25px",
          cursor: "pointer",
          animation: "bounce 1.5s infinite",
        }}
      />
    </a>

    <style>
      {`
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-8px);
      }
      60% {
        transform: translateY(-4px);
      }
    }
  `}
    </style>

  </section>
)

export default Experience

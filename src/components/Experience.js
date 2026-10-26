const Experience = () => (
  <section
    id="Experience"
    style={{
      paddingTop: "80px",
      minHeight: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "left",
      maxWidth: "900px",
      margin: "0 auto",
      gap: "1.5rem",
    }}
  >
    <div style={{ width: "100%" }}>
      <p style={{ margin: 0, color: "#7dd3fc", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
        Experience
      </p>
      <h2
        style={{
          position: "relative",
          display: "inline-block",
          paddingBottom: "12px",
          margin: "12px 0 20px",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "#edf6ff",
          letterSpacing: "-0.06em",
        }}
      >
        Professional experience
        <span
          style={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "10%",
            width: "80%",
            height: "3px",
            background: "linear-gradient(90deg, rgba(125,211,252,0.8), rgba(196,181,253,0.8))",
            borderRadius: "999px",
          }}
        ></span>
      </h2>
    </div>

    <div
      style={{
        width: "100%",
        background: "rgba(10, 16, 27, 0.65)",
        border: "1px solid rgba(148, 163, 184, 0.2)",
        borderRadius: "22px",
        padding: "24px 22px",
        boxShadow: "0 24px 50px rgba(2, 6, 23, 0.18)",
      }}
    >
      <h3 style={{ fontSize: "20px", marginTop: 0, marginBottom: "8px", color: "#edf6ff" }}>
        Lumen Technologies
      </h3>

      <p style={{ margin: 0, color: "rgba(191, 219, 254, 0.8)", lineHeight: 1.3 }}>
        <span style={{ color: "#7dd3fc", fontWeight: "bold" }}>
          Software Engineer Intern
        </span>
      </p>

      <p style={{ margin: "6px 0 0", color: "rgba(191, 219, 254, 0.62)", lineHeight: 1.2 }}>
        Remote
      </p>

      <p style={{ margin: "4px 0 0", color: "rgba(191, 219, 254, 0.62)", lineHeight: 1.2 }}>
        May 2026 - August 2026
      </p>

      <ul
        style={{
          marginTop: "0.9rem",
          marginBottom: 0,
          paddingLeft: "1.1rem",
          color: "rgba(191, 219, 254, 0.82)",
          lineHeight: "1.7",
          fontWeight: 300,
        }}
      >
        <li>Developed a Java tool that automatically generated reusable Handlebars templates for REST and SOAP service migrations, saving time and enabling reuse across endpoints.</li>
        <li>Built Python and Bash scripts that automated Splunk queries and generated HTTP request files and SQL scripts from configuration data, accelerating the API onboarding process.</li>
        <li>Created an AI-based Java tool that uses rule-based validation and the Copilot SDK to detect invalid Handlebars template fields and generate corrections.</li>
        <li>Built React and TypeScript components that made the API transformation framework easier to use and improved the developer experience.</li>
        <li>Worked with engineers and stakeholders to understand integration requirements, contribute to design discussions, and build automation features for service migrations.</li>
      </ul>
    </div>

    <div
      style={{
        width: "100%",
        background: "rgba(10, 16, 27, 0.65)",
        border: "1px solid rgba(148, 163, 184, 0.2)",
        borderRadius: "22px",
        padding: "24px 22px",
        boxShadow: "0 24px 50px rgba(2, 6, 23, 0.18)",
      }}
    >
      <h3 style={{ fontSize: "20px", marginTop: 0, marginBottom: "8px", color: "#edf6ff" }}>
        Norman Noble, Inc
      </h3>

      <p style={{ margin: 0, color: "rgba(191, 219, 254, 0.8)", lineHeight: 1.3 }}>
        <span style={{ color: "#7dd3fc", fontWeight: "bold" }}>
          Software Developer Intern
        </span>
      </p>

      <p style={{ margin: "6px 0 0", color: "rgba(191, 219, 254, 0.62)", lineHeight: 1.2 }}>
        Highland Heights, OH
      </p>

      <p style={{ margin: "4px 0 0", color: "rgba(191, 219, 254, 0.62)", lineHeight: 1.2 }}>
        May 2025 - August 2025
      </p>

      <ul
        style={{
          marginTop: "0.9rem",
          marginBottom: 0,
          paddingLeft: "1.1rem",
          color: "rgba(191, 219, 254, 0.82)",
          lineHeight: "1.7",
          fontWeight: 300,
        }}
      >
        <li>Collaborated with stakeholders to gather BI requirements and translated them into functional C# API automation programs.</li>
        <li>Developed, tested, and deployed a .NET email notification system for internal purchase requisitions.</li>
        <li>Refactored T-SQL stored procedures and developed optimized queries for integration within Epicor Kinetic ERP.</li>
        <li>Identified and extracted critical business logic from legacy C# applications to produce optimized SSRS reports for operational efficiency.</li>
        <li>Built and deployed C# REST APIs in Epicor Kinetic ERP to enable seamless integration with reporting tools and business-critical applications.</li>
        <li>Constructed integrated applications within Epicor Kinetic ERP using REST APIs and optimized queries to streamline data flow and reporting.</li>
      </ul>
    </div>
  </section>
)

export default Experience;
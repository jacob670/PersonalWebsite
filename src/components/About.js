const About = () => (
  <section
    id="About"
    style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 1rem",
    }}
  >
    <div id="about-anchor" style={{ position: "absolute", top: "-120px" }}></div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.1rem",
        maxWidth: "760px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "12px",
          color: "#7dd3fc",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        About
      </p>

      <h1
        style={{
          margin: 0,
          fontSize: "clamp(3rem, 7vw, 6rem)",
          lineHeight: 0.94,
          letterSpacing: "-0.08em",
          color: "#edf6ff",
        }}
      >
        Jacob Esteves
      </h1>

      <p
        style={{
          fontSize: "18px",
          fontWeight: 300,
          color: "rgba(191, 219, 254, 0.82)",
          margin: 0,
          maxWidth: "700px",
          lineHeight: "1.75",
        }}
      >
        I’m a fourth-year Computer Science and Cybersecurity student with hands-on experience in software engineering, automation, and cloud-based development. I enjoy solving practical problems with code and building tools that are useful, reliable, and thoughtfully designed.
      </p>
    </div>

    <div
      style={{
        marginTop: "2.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      <img
        src="/assets/headshot3.jpg"
        alt="Jacob Esteves"
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 0 60px rgba(125, 211, 252, 0.22)",
          border: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      />
    </div>

    <a
      href="#Experience"
      style={{
        marginTop: "2.25rem",
        marginBottom: "30px",
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
          filter: "brightness(0.95)",
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
);

export default About;

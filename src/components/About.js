const About = () => (
  <section
    id="About"
    style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      textAlign: "center",
      padding: "0 1rem",
    }}
  >
    <div id="about-anchor" style={{ position: "absolute", top: "-120px" }}></div>

    <p
      style={{
        fontSize: "16px",
        fontWeight: 300,
        color: "#444",
        marginTop: "140px",
        marginBottom: "20px",
        maxWidth: "708px",
        lineHeight: "1.7",
      }}
    >
      I am currently a 3rd year college student with hands-on experience in C# programming, API development, and database query optimization.
      I am skilled at analyzing business requirements and assisting in the creation of automation solutions and BI reports.
      I have a passion for creating efficient software applications that utilize cloud computing and its services.
    </p>

    <img
      src="/assets/headshot3.jpg"
      alt="Jacob Esteves"
      style={{
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />


<a
  href="#Experience"
  style={{
    marginTop: "auto",
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

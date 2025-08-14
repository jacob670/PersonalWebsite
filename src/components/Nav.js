import React from "react";

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontSize: "15px",
  transition: "color 0.3s ease",
  cursor: "pointer",
};

const NavLinks = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        fontSize: "20px",
        fontWeight: "400",
        alignItems: "center",
        height: "100%",
      }}
    >
      {["About", "Experience", "Software"].map((text) => (
        <a
          key={text}
          href={`#${text}`}
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.color = "#00aaff")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
        >
          {text}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;

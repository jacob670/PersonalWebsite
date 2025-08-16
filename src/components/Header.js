import React from "react";
import NavLinks from "./Nav";

const Header = () => {
    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                height: "100px",
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #ddd",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                padding: "0 1rem",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    flexShrink: 0,
                    paddingLeft: "2rem"
                }}
            >
                <h2 style={{ margin: 0 }}>Jacob Esteves</h2>
                <span style={{ fontSize: "14px", color: "#555" }}>
                    Computer Science | Cybersecurity
                </span>
            </div>


            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                    width: "auto",
                    zIndex: 1001,
                }}
            >
                <NavLinks />
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "center",
                    flexShrink: 0,
                    marginLeft: "auto",
                    paddingRight: "2rem",
                }}
            >
                <a href="https://github.com/jacob670/jacob670" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/github-logo.png"
                        alt="GitHub"
                        style={{
                            width: 30,
                            height: 30,
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                </a>
                <a href="https://www.linkedin.com/in/jacob-esteves-804595329/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/linkedin-logo.png"
                        alt="LinkedIn"
                        style={{
                            width: 40,
                            height: 40,
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
import React from "react";
import NavLinks from "./Nav";

const Header = () => {
    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                height: "92px",
                background: "rgba(6, 11, 20, 0.55)",
                borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                padding: "0 1.5rem",
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
                    paddingLeft: "1rem"
                }}
            >
                <h2 style={{ margin: 0, color: "#edf6ff", fontSize: "1.05rem", letterSpacing: "-0.05em" }}>Jacob Esteves</h2>
                <span style={{ fontSize: "12px", color: "rgba(191, 219, 254, 0.72)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Computer Science | Cybersecurity
                </span>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "12px",
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
                    gap: "1rem",
                    alignItems: "center",
                    flexShrink: 0,
                    marginLeft: "auto",
                    paddingRight: "1rem",
                }}
            >
                <a href="https://github.com/jacob670/jacob670" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/github-logo.png"
                        alt="GitHub"
                        style={{
                            width: 28,
                            height: 28,
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                            filter: "brightness(1.15)",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                </a>
                <a href="https://www.linkedin.com/in/jacob-esteves-804595329/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/linkedin-logo.png"
                        alt="LinkedIn"
                        style={{
                            width: 34,
                            height: 34,
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                            filter: "brightness(1.15)",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
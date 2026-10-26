import React, { useEffect, useState } from "react";
import Background from "./components/Background";
import Software from "./components/Software";
import "./App.css";

const skills = [
  "java",
  "aws",
  "github",
  "cisco-ios",
  "spring-boot",
  "postgresql",
  "bash",
  "palo alto",
  ".net",
  "ssms",
  "splunk",
  "c",
];

const navItems = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "software", href: "#software" },
];

const terminalSteps = [
  {
    command: "whoami",
    output: "Jacob Esteves • cs + cybersecurity",
    type: "text",
  },
  {
    command: "cat about.txt",
    output: [
      "cs & cybersecurity student",
      "software development, automation, query optimization",
      "backend • cloud • automation",
    ],
    type: "multi",
  },
  {
    command: "ls ~/skills",
    output: skills,
    type: "skills",
  },
  {
    command: "cat ~/contact",
    output: ["www.linkedin.com/in/jacob-esteves-804595329 • github.com/jacob670"],
    type: "multi",
  },
];

const experienceEntries = [
  {
    period: "2026.08 — Present",
    company: "Lumen Technologies",
    role: "Software Engineer (Contract)",
    location: "Remote",
    bullets: [],
  },
  {
    period: "2026.05 — 2026.08",
    company: "Lumen Technologies",
    role: "Software Engineer Intern",
    location: "Remote",
    bullets: [
      "Developed a Java tool that automatically generated reusable Handlebars templates for REST and SOAP service migrations, reducing time and allowing the reuse of templates across different endpoints.",
      "Built Python and Bash scripts that automated Splunk queries and generated HTTP request files and SQL scripts from configuration data, speeding up the API onboarding process.",
      "Built React and TypeScript components that made the API transformation framework easier to use and improved the overall developer experience.",
      "Worked with engineers and stakeholders to understand integration requirements, contribute to design discussions, and build automation features for service migrations.",
    ],
  },
  {
    period: "2025.05 — 2025.08",
    company: "Norman Noble, Inc",
    role: "Software Developer Intern",
    location: "Highland Heights, OH",
    bullets: [
      "Collaborated with stakeholders to gather BI requirements and translated them into functional C# API Automation programs",
      "Developed, tested, and deployed a .NET email notifcation system for internal purcahse requistions",
      "Refactored T-SQL stored procedures and developed optimized queries for integration within Epicor Kinetic ERP",
      "Identified and extracted critical business logic from legacy C# applications to produce optimized SSRS reports for operational efficiency",
      "Built and deployed C# REST APIs in Epicor Kinetic ERP to enable seamless integration with reporting tools and business-critical applications",
      "Constructed integrated dashboards within Epicor Kinetic ERP using REST APIs and optimized queries to streamline data flow and reporting",
    ],
  },
];

function formatOutput(step) {
  if (step.type === "text") return step.output;
  if (step.type === "multi") return step.output.join("\n");
  if (step.type === "skills") return step.output.join("  ");
  return "";
}

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [phase, setPhase] = useState("command");
  const [showCursor, setShowCursor] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [activePath, setActivePath] = useState("~/about");

  useEffect(() => {
    const currentStep = terminalSteps[activeStep];
    if (!currentStep) {
      return undefined;
    }

    if (phase === "command") {
      let index = 0;
      setTypedText("");

      const typing = setInterval(() => {
        index += 1;
        setTypedText(currentStep.command.slice(0, index));

        if (index >= currentStep.command.length) {
          clearInterval(typing);
          const commandDelay = setTimeout(() => {
            setDisplayedOutput(formatOutput(currentStep));
            setPhase("output");
          }, 250);
          return () => clearTimeout(commandDelay);
        }
        return undefined;
      }, 80);

      return () => clearInterval(typing);
    }

    if (phase === "output") {
      const outputDelay = setTimeout(() => {
        setActiveStep((prev) => Math.min(prev + 1, terminalSteps.length));
        setPhase("command");
      }, 500);

      return () => clearTimeout(outputDelay);
    }

    return undefined;
  }, [activeStep, phase]);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  const handleNavClick = (event, item) => {
    setActivePath(`~/${item.label}`);

    if (item.label === "about") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetId = item.href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <div className="site-shell" data-theme={theme}>
      <Background />

      <header className="topbar">
        <div className="topbar-shell">
          <div className="path-indicator" aria-label="Current terminal path">
            <span className="path-prefix">~/</span>
            <span className="path-label">{activePath.replace(/^~\//, "") || ""}</span>
            <span className="path-cursor" aria-hidden="true" />
          </div>

          <nav className="topnav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle color mode"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
          >
            <span className="theme-icon">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
        </div>
      </header>

      <main className="terminal-page">
        <header className="intro-header" aria-label="Introduction">
          <p className="intro-copy">
           Hi! I'm a student passionate about software development, automation, and cloud infrastructure</p>
        </header>

        <section className="terminal-shell" id="about" aria-label="Portfolio terminal intro">
          <div className="terminal-header">
            <div className="traffic-lights" aria-hidden="true">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="terminal-title">jacob@esteves - zsh</div>
          </div>

          <div className="terminal-body">
            {terminalSteps.slice(0, Math.min(activeStep + 1, terminalSteps.length)).map((step, index) => {
              const isCurrent = index === activeStep;
              const isPast = index < activeStep;
              const shouldShowCurrentCommand = isCurrent && phase === "command";
              const shouldShowCurrentOutput = isCurrent && phase === "output";

              return (
                <React.Fragment key={step.command}>
                  <div className="terminal-line">
                    <span className="prompt">jacob@esteves:~$</span>
                    <span className={isCurrent ? "typed-command active" : "typed-command"}>
                      {isPast ? step.command : shouldShowCurrentCommand ? typedText : step.command}
                    </span>
                    {isCurrent && showCursor && phase === "command" && <span className="cursor" aria-hidden="true" />}
                  </div>

                  {(isPast || shouldShowCurrentOutput) && (
                    <div className="terminal-output">
                      {isPast && step.type === "text" && (
                        <span className="terminal-value terminal-output-block">
                          <span className="terminal-name">{step.output.split(" • ")[0]}</span>
                          <span> • {step.output.split(" • ")[1]}</span>
                        </span>
                      )}

                      {isPast && step.type === "multi" &&
                        step.output.map((line) => (
                          <p key={line} className="terminal-output-block"><span className="terminal-value">{line}</span></p>
                        ))}

                      {isPast && step.type === "skills" && (
                        <div className="skills-row terminal-output-block" aria-label="skills">
                          {step.output.map((skill) => (
                            <span key={skill} className="skill-pill">{skill}</span>
                          ))}
                        </div>
                      )}

                      {shouldShowCurrentOutput && step.type === "text" && (
                        <span className="terminal-value terminal-output-block">
                          <span className="terminal-name">{displayedOutput.split(" • ")[0]}</span>
                          <span> • {displayedOutput.split(" • ")[1]}</span>
                        </span>
                      )}

                      {shouldShowCurrentOutput && step.type === "multi" &&
                        displayedOutput.split("\n").map((line) => (
                          <p key={line} className="terminal-output-block"><span className="terminal-value">{line}</span></p>
                        ))}

                      {shouldShowCurrentOutput && step.type === "skills" && (
                        <div className="skills-row terminal-output-block" aria-label="skills">
                          {step.output.map((skill) => (
                            <span key={skill} className="skill-pill">{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        <section
          className="experience-section is-visible"
          id="experience"
          aria-label="Experience timeline"
        >
          <div className="experience-label">// experience</div>
          <div className="timeline" role="list">
            {experienceEntries.map((entry) => (
              <article className="timeline-item" key={`${entry.company}-${entry.period}`} role="listitem">
                <div className="timeline-side">
                  <span className="timeline-date">{entry.period}</span>
                </div>

                <div className="timeline-marker" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>

                <div className="timeline-card">
                  <div className="timeline-heading">
                    <div className="timeline-company-row">
                      <span className="timeline-company">{entry.company}</span>
                      <span className="timeline-location">{entry.location}</span>
                    </div>
                    <span className="timeline-role">{entry.role}</span>
                  </div>

                  {entry.bullets.length > 0 ? (
                    <ul className="timeline-bullets">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="timeline-empty"></div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Software />
      </main>
    </div>
  );
}

export default App;

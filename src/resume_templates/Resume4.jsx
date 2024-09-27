import React from "react";
import "../style/resume4.css";
const resumeData = {
  basicDetails: {
    name: "Samira Hadid",
    email: "samira.hadid@example.com",
    phone: "123-456-7890",
    profession: "Graphic Designer",
    website: "www.samirahadid.com",
    objective:
      "A creative and passionate graphic designer with a strong eye for detail and a commitment to delivering high-quality visual solutions.",
  },
  education: [
    {
      degree: "Bachelor of Arts in Graphic Design",
      institution: "University of Design",
      year: "2017",
    },
    {
      degree: "Associate of Arts in Visual Communication",
      institution: "Community College",
      year: "2015",
    },
  ],
  workExperience: [
    {
      company: "Design Agency",
      position: "Graphic Designer",
      duration: "2018 - Present",
    },
    {
      company: "Freelance Designer",
      position: "Freelance Graphic Designer",
      duration: "2017 - 2018",
    },
  ],
  projects: [
    {
      title: "Brand Identity Design",
      description:
        "Developed a complete brand identity system for a new startup company, including logo design, color palette, typography, and brand guidelines.",
    },
    {
      title: "Website Design & Development",
      description:
        "Designed and developed a responsive website for a local business, using HTML, CSS, and JavaScript.",
    },
  ],
  skills: [
    { skill: "Adobe Photoshop" },
    { skill: "Adobe Illustrator" },
    { skill: "Adobe InDesign" },
    { skill: "Figma" },
    { skill: "UI/UX Design" },
    { skill: "Sketch" },
    { skill: "InVision" },
    { skill: "CorelDRAW" },
  ],
  customSections: [
    {
      sectionName: "Awards & Recognition",
      content: 'Awarded "Best Student Designer" in 2017.',
    },
  ],
};

const Resume4 = () => {
  return (
    <div className="resume-container">
      <div className="header-section">
        <div className="header">
          <h1>{resumeData.basicDetails.name}</h1>
          <h2>{resumeData.basicDetails.profession}</h2>
        </div>

        <div className="contact-info">
          <p>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            {resumeData.basicDetails.phone}
          </p>
          <p>
            <span role="img" aria-label="email">
              ✉️
            </span>{" "}
            {resumeData.basicDetails.email}
          </p>
          <p>
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            {resumeData.basicDetails.website}
          </p>
        </div>
      </div>

      <div className="about-me">
        <h3>About Me</h3>
        <p>{resumeData.basicDetails.objective}</p>
      </div>

      <div className="experience">
        <h3>Experience</h3>
        <div className="experience-section">
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="company-duration1">
                <strong>
                  {exp.company} {exp.duration}
                </strong>
              </div>
              <div className="position">{exp.position}</div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="education">
        <h3>Education</h3>
        <div className="education-section">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div>
                <strong>{edu.year}</strong>
                <strong>{edu.institution}</strong>
                <p>{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-expertise">
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill.skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="custom-sections">
        <h3>{resumeData.customSections[0].sectionName}</h3>
        <p>{resumeData.customSections[0].content}</p>
      </div>

      {/* Reference */}
      <div className="reference">
        <h3>Reference</h3>
        <p>Lorna Alvarado</p>
        <p>Company Name/Position</p>
        <p>+123-456-7890</p>
      </div>
    </div>
  );
};

export default Resume4;

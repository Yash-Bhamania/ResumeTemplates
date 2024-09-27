import React from "react";
import "../style/resume3.css";
import { HiOutlineMail } from "react-icons/hi";
import { CiLink } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

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

const Resume3 = () => {
  return (
    <>
      <div className="container">
        <div className="basic-details">
          <div className="name">
            <h1> {resumeData.basicDetails.name} </h1>{" "}
            <p>{resumeData.basicDetails.profession}</p>
          </div>
          <div className="details">
            <ul>
              <li>
                <HiOutlineMail /> {resumeData.basicDetails.email}
              </li>
              <li>
                {" "}
                <FaPhoneAlt />
                {resumeData.basicDetails.phone}
              </li>
              <li>
                {" "}
                <CiLink />
                {resumeData.basicDetails.website}
              </li>
            </ul>
          </div>
        </div>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <div className="work-experience-details">
            <div className="work-experience-section">
              {resumeData.workExperience.map((com, i) => (
                <div key={i} className="work-experience-item">
                  <div className="company-duration">
                    <span className="company">{com.company}</span> <br />
                    <span className="duration"> ({com.duration})</span>
                  </div>

                  <div className="position">
                    {com.position}
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Similique quam fugit dolore maiores et quos, accusantium
                      fuga deserunt ipsum! Quae perferendis beatae neque eum
                      distinctio enim non suscipit autem ab.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* {resumeData.workExperience[0].company}
            <div className="work-experience-details-company">
              {resumeData.workExperience.map((user) => `${user.company}`)};
            </div> */}
          </div>
        </div>
        <div className="work-experience">
          <h2>Education</h2>
          <div className="work-experience-details">
            <div className="work-experience-section">
              {resumeData.education.map((com, i) => (
                <div key={i} className="work-experience-item">
                  {/* First div contains company name and duration */}
                  <div className="company-duration">
                    <span className="company">{com.degree}</span> <br />
                    <span className="duration"> ({com.year})</span>
                  </div>

                  {/* Second div contains position */}
                  <div className="position">
                    {com.institution}
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Similique quam fugit dolore maiores et quos, accusantium
                      fuga deserunt ipsum! Quae perferendis beatae neque eum
                      distinctio enim non suscipit autem ab.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* {resumeData.workExperience[0].company}
            <div className="work-experience-details-company">
              {resumeData.workExperience.map((user) => `${user.company}`)};
            </div> */}
          </div>
        </div>
        <div className="work-experience">
          <h2>Skills</h2>
          <div className="skills-section">
            {resumeData.skills.map((skillObj, i) => (
              <div key={i} className="skill-item">
                {skillObj.skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume3;

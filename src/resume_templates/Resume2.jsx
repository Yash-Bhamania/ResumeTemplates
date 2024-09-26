import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import "../style/resume2.css";

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
  ],
  customSections: [
    {
      sectionName: "Awards & Recognition",
      content: 'Awarded "Best Student Designer" in 2017.',
    },
  ],
};

const Resume2 = () => {
  return (
    <>
      <Container
        maxWidth="md"
        className="resume-page"
        sx={{
          border: "1px solid black",
          paddingTop: "15px",
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          {resumeData.basicDetails.name}
        </Typography>
        <Typography pt={2} variant="h6" textAlign={"center"}>
          {resumeData.basicDetails.profession}
        </Typography>
        <Grid item container pt={2} textAlign={"center"}>
          <Grid item lg={4}>
            <Typography>
              <strong>E-mail :</strong> {resumeData.basicDetails.email}
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography>
              <strong>Ph. No :</strong> {resumeData.basicDetails.phone}
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography>
              <strong>Link :</strong> {resumeData.basicDetails.website}
            </Typography>
          </Grid>
        </Grid>

        {/* Objective Section */}
        <Grid container>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              bgcolor: "lightgray",
              width: "100%",
              mt: "15px",
            }}
          >
            Objective
          </Typography>
          <Typography
            textAlign={"left"}
            sx={{
              padding: "20px 30px",
            }}
          >
            {resumeData.basicDetails.objective}
          </Typography>
        </Grid>

        {/* Education Section */}
        <Grid item container>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              bgcolor: "lightgray",
              width: "100%",
              mt: "15px",
            }}
          >
            Education
          </Typography>
          <List>
            {resumeData.education.map((edu, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${edu.degree} - ${edu.institution}`}
                  secondary={`Graduation : ${edu.year}`}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Experience Section */}
        <Grid item container>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              bgcolor: "lightgray",
              width: "100%",
              mt: "15px",
            }}
          >
            Work Experience
          </Typography>
          <List>
            {resumeData.workExperience.map((exp, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${exp.position} - ${exp.company}`}
                  secondary={`Duration : ${exp.duration}`}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Projects Section */}
        <Grid item container>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              bgcolor: "lightgray",
              width: "100%",
              mt: "15px",
            }}
          >
            Projects
          </Typography>
          <List>
            {resumeData.projects.map((project, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={project.title}
                  secondary={project.description}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Custom Section */}
        <Grid item container>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              bgcolor: "lightgray",
              width: "100%",
              mt: "15px",
            }}
          >
            {resumeData.customSections[0].sectionName}
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={resumeData.customSections[0].content}
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </ListItem>
          </List>
        </Grid>
      </Container>
    </>
  );
};

export default Resume2;

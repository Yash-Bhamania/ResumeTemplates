import React from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
} from "@mui/material";

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

const Resume0 = () => {
  return (
    <Container
      maxWidth="md"
      style={{ backgroundColor: "#f5f5f5", padding: "20px", height: "1000px" }}
    >
      <Grid container spacing={2}>
        {/* Left Side - Profile Image, About, and Contact */}
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#212020",
            color: "#fff",
            padding: "20px",
            height: "1000px",
          }}
        >
          <Avatar
            alt="Samira Hadid"
            src="https://via.placeholder.com/150"
            sx={{ width: 150, height: 150, margin: "auto" }}
          />
          <Typography variant="h5" align="center" gutterBottom>
            {resumeData.basicDetails.name}
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            {resumeData.basicDetails.profession}
          </Typography>
          <Divider style={{ margin: "20px 0", backgroundColor: "#777" }} />
          <Typography variant="h6" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body2" paragraph>
            {resumeData.basicDetails.objective}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            {resumeData.basicDetails.phone}
          </Typography>
          <Typography variant="body2">
            {resumeData.basicDetails.email}
          </Typography>
          <Typography variant="body2">
            {resumeData.basicDetails.website}
          </Typography>
          <Divider style={{ margin: "20px 0", backgroundColor: "#777" }} />
          <Typography variant="h6" gutterBottom>
            Expertise
          </Typography>
          {resumeData.skills.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Typography variant="body2">{item.skill}</Typography>
              <LinearProgress
                variant="determinate"
                value={80}
                style={{ height: "8px", borderRadius: "5px" }}
              />
            </div>
          ))}
        </Grid>

        {/* Right Side - Education, Experience, Projects */}
        <Grid item xs={12} md={8} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <List>
            {resumeData.education.map((edu, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${edu.degree} - ${edu.institution}`}
                  secondary={`Graduated: ${edu.year}`}
                />
              </ListItem>
            ))}
          </List>
          <Divider style={{ margin: "20px 0" }} />

          <Typography variant="h6" gutterBottom>
            Work Experience
          </Typography>
          <List>
            {resumeData.workExperience.map((work, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${work.position} at ${work.company}`}
                  secondary={`${work.duration}`}
                />
              </ListItem>
            ))}
          </List>
          <Divider style={{ margin: "20px 0" }} />

          <Typography variant="h6" gutterBottom>
            Projects
          </Typography>
          <List>
            {resumeData.projects.map((project, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={project.title}
                  secondary={project.description}
                />
              </ListItem>
            ))}
          </List>
          <Divider style={{ margin: "20px 0" }} />

          <Typography variant="h6" gutterBottom>
            {resumeData.customSections[0].sectionName}
          </Typography>
          <Typography variant="body2">
            {resumeData.customSections[0].content}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resume0;

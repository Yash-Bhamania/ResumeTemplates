import React from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Resume1 = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        padding: "20px",
        fontFamily: "'Georgia', serif",
        color: "#333",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          fontFamily: "'Georgia', serif",
          color: "#333",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Grid container spacing={3}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <div
              style={{
                backgroundColor: "#212936",
                color: "white",
                padding: "20px",
                height: "100%",
                borderRadius: "10px",
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="profile"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                variant="h5"
                style={{ marginTop: "20px", textAlign: "center" }}
              >
                Mariana Anderson
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                Marketing Manager
              </Typography>
              <Divider
                style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}
              />
              <div>
                <Typography variant="h6" style={{ color: "#fff" }}>
                  Contact
                </Typography>
                <Typography variant="body2">Phone: 123-456-7890</Typography>
                <Typography variant="body2">
                  Email: hello@reallygreatsite.com
                </Typography>
                <Typography variant="body2">
                  Address: 123 Anywhere St, Any City
                </Typography>
              </div>

              <Divider
                style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}
              />
              <div>
                <Typography variant="h6" style={{ color: "#fff" }}>
                  Education
                </Typography>
                <Typography variant="body2">2008 Enter Your Degree</Typography>
                <Typography variant="body2">University/College</Typography>
              </div>

              <Divider
                style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}
              />
              <div>
                <Typography variant="h6" style={{ color: "#fff" }}>
                  Expertise
                </Typography>
                <List>
                  <ListItem style={{ color: "#fff" }}>
                    <ListItemText>
                      <Typography variant="body2">UI/UX</Typography>
                      <Typography variant="body2">Visual Design</Typography>
                      <Typography variant="body2">Wireframes</Typography>
                      <Typography variant="body2">Storyboards</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </div>

              <Divider
                style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}
              />
              <div>
                <Typography variant="h6" style={{ color: "#fff" }}>
                  Language
                </Typography>
                <Typography variant="body2">English</Typography>
                <Typography variant="body2">Spanish</Typography>
              </div>
            </div>
          </Grid>

          {/* Right Content Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              Experience
            </Typography>

            <div style={{ marginTop: "20px" }}>
              <Typography variant="h6">2019 - 2022</Typography>
              <Typography variant="body1">Company Name, Job Title</Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pharetra in lorem at laoreet.
              </Typography>
            </div>

            <Divider style={{ margin: "20px 0" }} />

            <div>
              <Typography variant="h6">2017 - 2019</Typography>
              <Typography variant="body1">Company Name, Job Title</Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pharetra in lorem at laoreet.
              </Typography>
            </div>

            <Divider style={{ margin: "20px 0" }} />

            <div>
              <Typography variant="h6">2015 - 2017</Typography>
              <Typography variant="body1">Company Name, Job Title</Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pharetra in lorem at laoreet.
              </Typography>
            </div>

            <Divider style={{ margin: "20px 0" }} />

            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              References
            </Typography>

            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body1">Name Surname</Typography>
                <Typography variant="body2">
                  Job Position, Company Name
                </Typography>
                <Typography variant="body2">Phone: 123-456-7890</Typography>
                <Typography variant="body2">
                  Email: hello@reallygreatsite.com
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1">Name Surname</Typography>
                <Typography variant="body2">
                  Job Position, Company Name
                </Typography>
                <Typography variant="body2">Phone: 123-456-7890</Typography>
                <Typography variant="body2">
                  Email: hello@reallygreatsite.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Resume1;

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/mick_sav.jpg";
import MKProgress from "../../../../components/MKProgress";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Michael Savard</MKTypography>
                <MKButton color="info" size="small">
                  Contact
                </MKButton>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Status&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Active
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Domain&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    CND-015 (Montréal)
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    MC&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    13
                  </MKTypography>
                  <MKProgress variant="gradient" color="success" value="50" />
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <b>History:</b> <br />
                I am a potato, a rond and fabulous potato. I love to munch on cheese.
                <br />
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;

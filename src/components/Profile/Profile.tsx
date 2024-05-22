import { Grid } from "@mui/material";

function Profile() {
  return (
    <div className="profile">
      <img width={300} height={300} src="/me.png" />

      <Grid container justifyContent={"center"} spacing={1} padding={2}>
        <Grid item>
          <a href="#">
            <img width={50} height={50} src="/github.webp" />
          </a>
        </Grid>
        <Grid item>
          <a href="#">
            <img width={50} height={50} src="/instagram.webp" />
          </a>
        </Grid>
        <Grid item>
          <a href="#">
            <img width={50} height={50} src="/facebook.png" />
          </a>
        </Grid>
        <Grid item>
          <a href="#">
            <img width={50} height={50} src="/linkedin.png" />
          </a>
        </Grid>
        <Grid item>
          <a href="#">
            <img width={50} height={50} src="/spotify.png" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;

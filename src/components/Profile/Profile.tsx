import { Grid } from "@mui/material";

function Profile() {
  return (
    <div className="profile">
      <img width={300} height={300} src="/me.png" />

      <Grid container justifyContent={"center"} spacing={1} padding={2}>
        <Grid item>
          <a href="https://github.com/mrviniciux">
            <img width={50} height={50} src="/github.webp" />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.instagram.com/3nl1ght3dstr3am/">
            <img width={50} height={50} src="/instagram.webp" />
          </a>
        </Grid>
        <Grid item>
          <a href="https://web.facebook.com/httpmarks">
            <img width={50} height={50} src="/facebook.png" />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/mrviniciux/">
            <img width={50} height={50} src="/linkedin.png" />
          </a>
        </Grid>
        <Grid item>
          <a href="https://open.spotify.com/user/12179331974?si=e884de4e8a034d7a">
            <img width={50} height={50} src="/spotify.png" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
